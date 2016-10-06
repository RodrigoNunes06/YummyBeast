
var results
var recommendation = ""




$(document).on('submit', '.search-form-js', function(event) {
  
  event.preventDefault();

  $('#map-container').removeClass('hidden')

  $(document).scrollTop(700)

  createMap(myPosition)
  createUserMarker(myPosition)

  console.log(recommendation)

  $.when(

    $.ajax({
      url: '/search',
      type: 'post',
      data: {
        term: $('[name=term]').val(),
        radius: $('[name=radius]').val(),
        recommend: recommendation,
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
    recommendation = false
  });
});

