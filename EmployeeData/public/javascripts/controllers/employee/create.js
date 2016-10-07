app.controller('createEmployeeController', createEmployeeController);
function createEmployeeController($scope, employeeService, $location){
  $scope.title = "Create New Employee";
  $scope.employee = {};
 
  // Save the employee
  $scope.saveEmployee = function(){
      if($scope.form.$valid){
          // call the create employee service
          employeeService.createEmployee($scope.employee).then(function(result){
              console.log(result.data);
              $location.path('/employee');
          });
      }
  }
}
