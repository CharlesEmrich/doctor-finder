var apiKey = require('./../.env').apiKey;

var Complaint = function() {
  this.medicalIssue = "";
};

Complaint.prototype.getConditions = function() {
  $.get(`https://api.betterdoctor.com/2016-03-01/conditions?user_key=${apiKey}`)
    .then((resp) => {
      console.log(resp);
    })
    .fail((error) => {
      console.error(error);
    });
};

Complaint.prototype.getDoctors = function (medicalIssue, callback) {
  this.medicalIssue = medicalIssue;
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=${apiKey}`)
 .then(function(response) {
   callback(response, medicalIssue);
  })
 .fail(function(error){
   console.error(error);
  });
}

Complaint.prototype.GetDocDetails = function (uid, callback) {
  $.get(`https://api.betterdoctor.com/2016-03-01/doctors/${uid}?user_key=${apiKey}`)
    .then((response) => {
      callback(response);
    })
    .fail((error) => {
      console.error(error);
    })
}

exports.complaintModule = Complaint;
