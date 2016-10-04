app.factory('employeeService', function($http){
  var employeeService = {
      getAllEmployee: getAllEmployee,
      getEmployeeById: getEmployeeById,
      createEmployee: createEmployee,
      modifyEmployee: modifyEmployee,
      deleteEmployee: deleteEmployee
  };

  return employeeService;

  /**
   * Get All employee
   */
  function getAllEmployee(){
      return $http({
          url: '/employee',
          method: 'GET'
      });
  }

  /**
   * Get employee by id
   */
  function getEmployeeById(employeeId){
      return $http({
          url: '/employee/'+ employeeId,
          method: 'GET'
      });
  }

  /**
   * Create employee
   */
  function createEmployee(employee){
      return $http({
          url: '/employee',
          method: 'POST',
          data: employee
      });
  }

  /**
   * Modify employee
   */
  function modifyEmployee(employeeId, employee){
      return $http({
          url: '/employee/'+ employeeId,
          method: 'PUT',
          data: employee
      });
  }

  /**
   * Delete employee
   */
  function deleteEmployee(employeeId){
      return $http({
          url: '/employee/'+ employeeId,
          method: 'DELETE'
      });
  }
});