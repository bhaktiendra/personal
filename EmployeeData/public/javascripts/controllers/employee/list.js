app.controller('listEmployeeController', listEmployeeController);
function listEmployeeController($scope, $rootScope, employeeService, $window){
  $scope.title = "List Employees";
  $scope.employee = [];
  $scope.searchCriteria = [
    {value: 'nip', name: 'NIP'},
    {value: 'nama', name: 'Nama'},
    {value: 'lantai', name: 'Lantai'},
    {value: 'baris', name: 'Baris'},
    {value: 'kelompok', name: 'Kelompok'},
    {value: 'nomor', name: 'Nomor'},
    {value: 'kolom', name: 'Kolom'}
  ];

  $scope.sortType     = 'nip'; // set the default sort type
  $scope.sortReverse  = false;

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
