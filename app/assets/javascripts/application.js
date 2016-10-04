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
      if (restaurant.rating > 0) {

        var location = {
          lat: restaurant.lat,
          lng: restaurant.lng
        }

        var name = restaurant.name;

        var rating = restaurant.rating;

        var content = `  
             <div class="caption">
               <p>`+ name +`</p>
               <br>
               <img id="yelp-logo" style="width:35px;height:30px" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/www_pages/95212dafe621/assets/img/brand_guidelines/yelp-2c.png" >
               <p>` + rating + ` </p>
             </div>
         `;

        createMarker(location, content)
      }
    })
  }); 
});


