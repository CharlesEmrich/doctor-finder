//business logic stuff for a particular module
var Complaint = function(args) {
  this.args = args; //to be replaced with constructor arguments
};

Complaint.prototype.examplePrototype = function() {
  return `this is an example prototype method`;
};

exports.complaintModule = Complaint;
