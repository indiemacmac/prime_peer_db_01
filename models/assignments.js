var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
  assignment_number: Number,
  student_name: String,
  assignment_name: String,
  score: Number,
  date_completed: Date,
  details: String
})

var Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
