var GeoCode = require('./../js/geocoding.js').geocodeModule;

var captureLatLong = function(response) {
  console.log(`Lat: ${response.results[0].geometry.location.lat}`);
  console.log(`Long: ${response.results[0].geometry.location.lng}`);
};


$(document).ready(function() {
  $('.complaint-form').submit((e) => {
    e.preventDefault();
    console.log('Ping!');
    var newGeo = new GeoCode();
    newGeo.getLatLong($('input[name="location"]').val(), captureLatLong);
  });
});
