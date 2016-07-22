angular.module('assignApp', []);

angular.module('assignApp').controller('MainController', function($http){
  var vm = this;

  vm.message = 'this is working';

  vm.doAction = function(){
    console.log('Clicked');

    // var sendData = {};
    //
    // sendData. = vm.
    // sendData.
    // sendData.




  }
  $http.get('/assignments').then(function(response){
    console.log('success');
    vm.assignments = response.data;
  }, function(response){
    console.log('err', response);
  });
})
