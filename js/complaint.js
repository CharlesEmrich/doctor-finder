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
};

Complaint.prototype.starterCode = function (medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
 .then(function(result) {
    console.log(result);
  })
 .fail(function(error){
    console.log("fail");
  });
}

exports.complaintModule = Complaint;
