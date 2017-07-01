var apiKey = require('./../.env').apiKey;
var userComplaint = require('./../js/complaint-interface').userComplaint;

var Complaint = function(medicalIssue) {
  this.medicalIssue = medicalIssue;
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

Complaint.prototype.getDoctors = function (lat, long, callback) {
  //NOTE: The line below doesn't work. I'd like to have a chat about why.
  // var medicalIssue = this.medicalIssue;

  $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userComplaint.medicalIssue}&location=${lat},${long},100&skip=0&limit=20&user_key=${apiKey}`)
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
