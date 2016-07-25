angular.module('assignApp', []);

angular.module('assignApp').controller('MainController', function($http){
  var vm = this;

  vm.message = 'this is working';
  vm.assignment = {};



  vm.addAssignment = function(){
    console.log(vm.assignment);
    $http.post('/assignments/addAssignment', vm.assignment).then(function(response){
      vm.assignment = {};
      getAssignments();
      console.log(response);
    }, function(response){
      console.log('fail');
    }
  )
}
  var getAssignments = function(){
    $http.get('/assignments').then(function(response){
      console.log('success');
      vm.assignments = response.data;
    }, function(response){
      console.log('err', response);
    });
  }

  getAssignments();
})
