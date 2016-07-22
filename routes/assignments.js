var express = require('express');
var router = express.Router();

var Assignment = require('../models/assignments');

router.get('/', function(request, response){
  Assignment.find({}, function(err, assignments){
    if(err){
      console.log(err);
      response.sendStatus(500);
    }else {
      response.send(assignments);
    }
  })
});
router.post('/addAssignment/:student_name/:assignment_name?', function(request, response){
  var createdAssignment = new Assignment({
    student_name: request.params.student_name,
    assignment_name: request.params.assignment_name,
  });
  createdAssignment.save(function(err){
    if(err){
      console.log('Save err', err);
      response.sendStatus(500);
    }else{
      response.sendStatus(200);
    }
  })
});

module.exports = router;
