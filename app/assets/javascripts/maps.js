var markers =[];
var map;
var myPosition;
var infowindow;


if ("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(onLocation, onError);
}

function onLocation(position){
  // We can't just directly feed the position into our google map
  // The objects are formatted differently, google maps is looking for
  // an object with "lat" and "lng" keys.
  myPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  console.log(myPosition);

  createMap(myPosition);
  // setupAutocomplete();
}

function onError(err){
  console.log("What are you using, IE 7??", err);
}

function createMap(position){
  map = new google.maps.Map($('#map')[0], {
    center: position,
    zoom: 15,
    scrollwheel: false
  });
  createUserMarker(position);
  infowindow = new google.maps.InfoWindow()
}


function createUserMarker(position) {
  var userIcon = {
    url: "http://maps.coj.net/DuvalProperty/images/StreetViewCircle.png",
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 30) // anchor
  };
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: userIcon
  })

};

function createMarker(position, content) {

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






// function setupAutocomplete() {
//   var input = $('#get-places')[0];
//   var autocomplete = new google.maps.places.Autocomplete(input);
//   autocomplete.addListener('place_changed', function() {
//     var place = autocomplete.getPlace();
//     if (place.geometry.location) {
//       map.setCenter(place.geometry.location);
//       map.setZoom(17);
//       createMarker(place.geometry.location)
//     }else{
//       alert("The place has no location..?")
//     }
//   });
// }
