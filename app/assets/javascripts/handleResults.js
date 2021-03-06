
function handleMergedResults (restaurant) {

  var location = {
    lat: restaurant.lat,
    lng: restaurant.lng
  }
  if (restaurant.ratings[0].provider == "google") {
    var googleRating = (restaurant.ratings[0].rating)/ 5 * 100;
    
  } else {
    var googleRating = (restaurant.ratings[1].rating)/ 5 * 100;
  }
  var name = restaurant.name;
  var yelpRating = restaurant.rating_image
  var average = (restaurant.average)/ 5 * 100;
  var content = '<div class="info"><p>'+ name +'</p><a href="'+ restaurant.yelp_url +'" target="_blank"><img id="yelp-logo" style="width: 40px;height: 35px; display:block" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/www_pages/95212dafe621/assets/img/brand_guidelines/yelp-2c.png" ></a> <img id="yelp-rating" src="'+ yelpRating +'"><br><a href="'+ restaurant.google_url +'" target="_blank"><img id="google-logo" style=" width: 40px; height: 40px; display:block;" src="https://www.seeklogo.net/wp-content/uploads/2014/06/google-logo-vector-free-download.png"></a><div class="star-ratings-sprite"><span style="width:'+ googleRating +'%" class="star-ratings-sprite-rating"></span></div><p>Average:</p><div class="star-ratings-sprite"><span style="width:'+ average +'%" class="star-ratings-sprite-rating"></span></div></div>';

  createMarker(location, content)
}

function handleSimpleResults (restaurant) {
  if (restaurant.rating > 0) {

    var name = restaurant.name;

    var location = {
      lat: restaurant.lat,
      lng: restaurant.lng
    }

    if (restaurant.provider == "google") {
      var image = "https://www.seeklogo.net/wp-content/uploads/2014/06/google-logo-vector-free-download.png"
      var rating = (restaurant.rating)/ 5 * 100;
      var content = '<div class="info"><p>'+ name +'</p><br><a href="'+ restaurant.url +'" target="_blank"><img id="provider-logo" style="width:40px;height:30px" src="'+ image +'"></a><div class="star-ratings-sprite"><span style="width:'+ rating +'%" class="star-ratings-sprite-rating"></span></div></div>';
    } else {
      var image = "https://s3-media2.fl.yelpcdn.com/assets/srv0/www_pages/95212dafe621/assets/img/brand_guidelines/yelp-2c.png"
      var rating = restaurant.rating_image
      var content = '<div class="info"><p>'+ name +'</p><br><a href="'+ restaurant.url +'" target="_blank"><img id="provider-logo" style="width:40px;height:30px" src="'+ image +'"></a><img id="yelp-rating" src="'+ rating +'"></div>';
    }

    createMarker(location, content)

  }
}






