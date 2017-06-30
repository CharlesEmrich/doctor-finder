var Complaint = require('./../js/complaint.js').complaintModule;


$(document).ready(function() {
  var newComplaint = new Complaint();

  console.log(newComplaint.getConditions());
});
