var apiKey = require('./../.env').apiKey;

var Complaint = function() {
};

Complaint.prototype.getConditions = function() {
  $.get(`https://api.betterdoctor.com/2016-03-01/conditions?user_key=${apiKey}`)
    .then((resp) => {
      console.log(resp);
    })
    .fail((error) => {
      console.error(error);
    });
  return `getDoctors issued.`;
};

exports.complaintModule = Complaint;
