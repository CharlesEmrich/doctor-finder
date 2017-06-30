var apiKey = require('./../.env').apiKey;

var Complaint = function(args) {
  this.args = args; //to be replaced with constructor arguments
};

Complaint.prototype.getDoctors = function() {
  $.get(`https://api.betterdoctor.com/2016-03-01/`)
    .then((resp) => {
      console.log(resp);
    })
    .fail((error) => {
      console.error(error);
    });
  return `this is an example prototype method`;
};

exports.complaintModule = Complaint;
