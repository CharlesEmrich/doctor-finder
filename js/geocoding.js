var apiKey = require('./../.env').geoApiKey;
var displayDoctors = require('./../js/complaint-interface').displayDoctors;


var Geocode = function() {
  this.lat = 0;
  this.long = 0;
};

Geocode.prototype.getLatLong = function(zip, callback) {
  $.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${zip}`)
    .then((response) => {
      console.log(`Lat: ${response.results[0].geometry.location.lat}`);
      console.log(`Long: ${response.results[0].geometry.location.lng}`);

      callback(response.results[0].geometry.location.lat,      response.results[0].geometry.location.lng, displayDoctors);
    })
    .fail((error) => {
      console.error(error);
    });
};

exports.geocodeModule = Geocode;
