app.controller('searchEmployeeController', searchEmployeeController);
function searchEmployeeController($scope, $rootScope, employeeService, $window, $routeParams){
  $scope.searchArgs = $routeParams.searchArgs;
  $scope.title = "Search Employee : " + $scope.searchArgs;
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
  
  // function to populate employee by nip search
  function populateEmployees(){
        employeeService.getEmployeeBySearch($scope.searchArgs).then(function(result){
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