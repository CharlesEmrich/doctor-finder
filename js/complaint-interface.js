var ExampleModule = require('./../js/complaint.js').complaintModule;


$(document).ready(function() {
  var exampleInstance = new ExampleModule('args');

  console.log(exampleInstance.examplePrototype());
});
