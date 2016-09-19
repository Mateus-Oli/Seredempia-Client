//Student API
//Send requests to server

angular.module("Seredempia").factory("studentsAPI", function($http, config){

  var _getStudent = function(cpf){
    return $http.get(config.baseUrl + "/studentsCp/" + cpf);
  };
  var _putStudent = function(student){
    return $http.put(config.baseUrl + "/students/", [student]);
  };
  return{
    getStudent:_getStudent,
    putStudent:_putStudent,
  };
});
