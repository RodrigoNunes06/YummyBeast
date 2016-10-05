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

var results



$(document).on('submit', '.search-form-js', function(event) {
  
  event.preventDefault();

  $('#map-container').removeClass('hidden')

  createMap(myPosition)

  $.when(

    $.ajax({
      url: '/search',
      type: 'post',
      data: {
        term: $('[name=term]').val(),
        // from maps.js I get myposition,
        coordinates: myPosition
      },
      success: function(response) {
        results = response
      }
    })
    
    
  ).then(function() {
    console.log(results)
    $(results).each(function(index,restaurant) {
      if (restaurant.ratings) {

        handleMergedResults(restaurant)
        
      } else {

        handleSimpleResults(restaurant) 
   
      }
    })
  }); 
});

function handleMergedResults (restaurant) {

    var location = {
      lat: restaurant.lat,
      lng: restaurant.lng
    }
    if (restaurant.ratings[0].provider == "google") {
      var googleRating = (restaurant.ratings[0].rating)/ 5 * 100;
      var yelpRating = (restaurant.ratings[1].rating)/ 5 * 100
    } else {
      var googleRating = (restaurant.ratings[1].rating)/ 5 * 100;
      var yelpRating = (restaurant.ratings[0].rating)/ 5 * 100
    }
    var name = restaurant.name;
    var average = (restaurant.average)/ 5 * 100;
    var content = `  
         <div class="info">
           <p>`+ name +`</p>
           <img id="yelp-logo" style="width:40px;height:35px" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/www_pages/95212dafe621/assets/img/brand_guidelines/yelp-2c.png" > 
           <div class="star-ratings-sprite"><span style="width:`+yelpRating+`%" class="star-ratings-sprite-rating"></span></div>
           <img id="google-logo" style="width:40px;height:40px" src="https://www.seeklogo.net/wp-content/uploads/2014/06/google-logo-vector-free-download.png">
           <div class="star-ratings-sprite"><span style="width:`+googleRating+`%" class="star-ratings-sprite-rating"></span></div>
           <p>Average:</p>
           <div class="star-ratings-sprite"><span style="width:`+average+`%" class="star-ratings-sprite-rating"></span></div>
         </div>
     `;

    createMarker(location, content)
   
}

function handleSimpleResults (restaurant) {
  if (restaurant.rating > 0) {

    var location = {
      lat: restaurant.lat,
      lng: restaurant.lng
    }

    if (restaurant.provider == "google") {
      image = "https://www.seeklogo.net/wp-content/uploads/2014/06/google-logo-vector-free-download.png"
    } else {
      image = "https://s3-media2.fl.yelpcdn.com/assets/srv0/www_pages/95212dafe621/assets/img/brand_guidelines/yelp-2c.png"
    }

    var name = restaurant.name;
    var rating = (restaurant.rating)/ 5 * 100;

    var content = `  
         <div class="info">
           <p>`+ name +`</p>
           <br>
           <img id="provider-logo" style="width:40px;height:30px" src="`+ image +`">
           <div class="star-ratings-sprite"><span style="width:`+ rating +`%" class="star-ratings-sprite-rating"></span></div>
         </div>
    `;

    createMarker(location, content)

  }
}




