app.controller('searchEmployeeController', searchEmployeeController);
function searchEmployeeController($scope, $rootScope, employeeService, $window, $routeParams){
  $scope.employeeNip = $routeParams.employeeNip;
  $scope.title = "Search Employee NIP: " + $scope.employeeNip;
  $scope.employee = [];

  // function to populate employee by nip search
  function populateEmployees(){
        employeeService.getEmployeeByNip($scope.employeeNip).then(function(result){
            $scope.employee = result.data;
        });
  }
 
  // execute function to populate employee by nip search.
  populateEmployees();
 
  $scope.deleteEmployeeConfirm = function(data){
      var message = "Are you sure want to delete employee: "+ data.nama + "?";
      var result = $window.confirm(message);
      if(result == true){
        // Call employee service to delete the employee
        employeeService.deleteEmployee(data._id).then(function(result){
          populateEmployees();
        });
      }
  }
}