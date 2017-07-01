var Complaint = require('./../js/complaint.js').complaintModule;

var displayDoctors = function(response, medicalIssue) {
  if (response.data.length === 0) {
    $('.result-complaint-name').text(medicalIssue);
    $('.doctors').text('No Doctors found. Sorry!')
    return;
  }
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
  $('.doctor-details').hide();
};

var showDetails = function(response) {
  $('.doctor-details').toggle();
  $(`.doctors li[data-uid = ${response.data.uid}] ul.doctor-details`).empty();
  $(`.doctors li[data-uid = ${response.data.uid}] ul.doctor-details`).append(`<li>Phone: ${response.data.practices[0].phones[0].number}</li>` +
                             `                                                <li>Bio: ${response.data.profile.bio}</li>`);
};

var userComplaint = null;

$(document).ready(function() {
});

exports.displayDoctors = displayDoctors;
exports.userComplaint = userComplaint;
