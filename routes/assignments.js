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
router.get('/:id', function(request, response){
  Assignment.find({_id: request.params.id}, function(err, assignments){
    if(err){
      Assignment.find({}, function(err, assignments){
        if(err){
          console.log(err);
          response.sendStatus(500);
        }else {
          response.send(assignments);
        }
      });
    }else {
      response.send(assignments);
    }
  });
});

router.post('/addAssignment', function(request, response){
  var createdAssignment = new Assignment({
    assignment_number: request.body.assignment_number,
    student_name: request.body.student_name,
    assignment_name: request.body.assignment_name,
    score: request.body.score,
    date_completed: request.body.date_completed,
    details: request.body.deta
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
