// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree .
var markers =[];
var map;


$(document).on('submit', '.search-form-js', function(event) {
  
  event.preventDefault();

  deleteMarkers()

  createMap(myPosition)

  $.ajax({
    url: '/search',
    type: 'post',
    data: {
      term: $('[name=term]').val(),
      // from maps.js I get myposition,
      coordinates: myPosition
    },
    success: function(response) {
      
      $('#search-results').empty()

      // $('#search-results').append('<h1 class="yummy-found">Yummy beast found the following options:</h1>')

      $(response).each(function (index, restaurant) {

        var name = restaurant.name
        var image = restaurant.image_url
        var rating = restaurant.rating_img_url_large
        var location = {
          lat: restaurant.location.coordinate.latitude,
          lng: restaurant.location.coordinate.longitude
        }
        var content = `  
          <div class="thumbnail">
            <img class="restaurant-pic" src="`+ image + `">
            <div class="caption">
              <h3>`+ name +`</h3>
              <img id="yelp-logo" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/www_pages/95212dafe621/assets/img/brand_guidelines/yelp-2c.png" >
              <img src="` + rating + `" >
            </div>
          </div>
        `;

        createMarker(location, name, image, rating, content)
      })
    }
  });
});

function createMarker(position, name, image, rating, content) {

  var marker = new google.maps.Marker({
    position: position,
    map: map,
  })

  markers.push(marker)
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.setContent(content);
    infowindow.open(map, this);
  }); 

};

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}



