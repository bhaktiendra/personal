app.controller('listEmployeeController', listEmployeeController);
function listEmployeeController($scope, $rootScope, employeeService, $window){
  $scope.title = "List Employees";
  $scope.employee = [];

  // function to populate employee
  function populateEmployees(){
    employeeService.getAllEmployee().then(function(result){
      $scope.employee = result.data;
    });
  }
  
  // execute function to populate employee.
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
