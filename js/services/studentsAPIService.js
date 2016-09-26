//Student API
//Send requests to server

angular.module("Seredempia").factory("studentsAPI", function($http, config){

  //Get Student with specific CPF
  var _getStudentCpf = function(cpf){
    return $http.get(config.baseUrl + "/studentsCp/" + cpf);
  };

  //Get Students with specific school
  var _getStudentSchool = function(school){
    return $http.get(config.baseUrl + "/studentsSc/" + school.name);
  };

  //Get Students with specific status
  var _getStudentStatus = function(status){
    return $http.get(config.baseUrl + "/studentsSt/" + status);
  }

  //Change Student information
  var _putStudent = function(students){
    return $http.put(config.baseUrl + "/students/", students);
  };

  //Return functions to be used
  return{
    getStudentCpf:_getStudentCpf,
    getStudentSchool: _getStudentSchool,
    getStudentStatus: _getStudentStatus,
    putStudent:_putStudent,
  };
});
