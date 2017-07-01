var GeoCode = require('./../js/geocoding.js').geocodeModule;
var Complaint = require('./../js/complaint.js').complaintModule;

var captureLatLong = function(response) {
  console.log(`Lat: ${response.results[0].geometry.location.lat}`);
  console.log(`Long: ${response.results[0].geometry.location.lng}`);
};


$(document).ready(function() {
  $('.complaint-form').submit((e) => {
    e.preventDefault();
    var newGeo = new GeoCode();
    var newComplaint = new Complaint($('input[name="complaint"]').val());
    newGeo.getLatLong($('input[name="location"]').val(),  newComplaint.getDoctors);
  });
});
