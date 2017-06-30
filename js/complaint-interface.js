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
  $(`.doctors li[data-uid = ${response.data.uid}] ul.doctor-details`).empty();
  $(`.doctors li[data-uid = ${response.data.uid}] ul.doctor-details`).append(`<li>Phone: ${response.data.practices[0].phones[0]}</li>` + 
                             `<li>Bio: ${response.data.profile.bio}</li>`);
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
