var Complaint = require('./../js/complaint.js').complaintModule;

var displayDoctors = function(response, medicalIssue) {
  $('.result-complaint-name').text(medicalIssue);
  $('.doctors').empty();
  response.data.forEach((element) => {
    $('.doctors').append(`<li data-uid="${element.uid}">${element.profile.first_name} ${element.profile.last_name}`+
                            `<ul class="doctor-details">` +
                            `</ul>` +
                         `</li>`
                        );
    $('.doctors li').last().click(() => {
      var tempComplaint = new Complaint();
      tempComplaint.GetDocDetails(element.uid, showDetails)
    });
  });
};

var showDetails = function(response) {
  console.log(response);
};

$(document).ready(function() {
  $('.complaint-form').submit((e) => {
    e.preventDefault();
    newComplaint.getDoctors($('input[name="complaint"]').val(), displayDoctors);

  });
  var newComplaint = new Complaint();
  // newComplaint.getConditions();
  newComplaint.getDoctors($('input[name="complaint"]').val(), displayDoctors);
});
