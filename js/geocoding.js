var apiKey = require('./../.env').geoApiKey;

var Geocode = function() {
  this.lat = 0;
  this.long = 0;
};

Geocode.prototype.getLatLong = function(zip) {
  $.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${zip}`)
    .then((resp) => {
      console.log(resp);
    })
    .fail((error) => {
      console.error(error);
    });
};

exports.geocodeModule = Geocode;
