var Complaint = require('./../js/complaint.js').complaintModule;


$(document).ready(function() {
  var newComplaint = new Complaint();
  // newComplaint.getConditions();
  newComplaint.starterCode($('input[name="complaint"]').val());
});
