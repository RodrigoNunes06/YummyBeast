var markers =[];
var map;
var myPosition;
var infowindow;


if ("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(onLocation, onError);
}

function onLocation(position){
  myPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }; 

}

function onError(err){
  console.log("What are you using, IE 7??", err);
}

function createMap(position){
  map = new google.maps.Map($('#map')[0], {
    center: position,
    zoom: 14,
    scrollwheel: false
  });
  createUserMarker(position);
  infowindow = new google.maps.InfoWindow();
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
    icon: userIcon,
    animation: google.maps.Animation.DROP,
    draggable: true
  });

};

function createMarker(position, content) {

  var marker = new google.maps.Marker({
    position: position,
    map: map,
    animation: google.maps.Animation.DROP
  })

  markers.push(marker);

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







