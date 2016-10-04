app.controller('editEmployeeController', editEmployeeController);
function editEmployeeController($scope, employeeService, $location, $routeParams){
  $scope.employeeId = $routeParams.employeeId;
  $scope.title = "Edit Employee";
  $scope.employee = {};
 

  // Get employee by id
  employeeService.getEmployeeById($scope.employeeId).then(function(result){
      $scope.employee = result.data;
      $scope.employee.genre = $scope.employee.genre._id;
      $scope.employee.director = $scope.employee.director._id;
      console.log($scope.employee);
  })
  
  // Save the employee
  $scope.saveEmployee = function(){
      if($scope.form.$valid){
          // call the update employee service
          employeeService.modifyEmployee($scope.employee._id, $scope.employee).then(function(result){
              $location.path('/employee');
          });
      }
  }
}
