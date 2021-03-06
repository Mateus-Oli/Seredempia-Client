//Transport Controller
//Controll the transport view

angular.module("Seredempia").controller("transportCtrl", function($scope, $rootScope, $cookies, $location, transportsAPI, studentsAPI){

  //load Students with status
  var loadStudents = function(status){

    //Get students from Backend
    studentsAPI.getStudentStatus(status).success(function(students){

      //Loaded Students
      $scope.students = students;

      //Selected Student
      $scope.student = {};

      //SearchBox
      $scope.pesquisa = "";
    });
  };

  //Change Student
  var changeStudent = function(student){

    //Send changes to Backedn
    studentsAPI.putStudent([student]).success(function(){

      //Empty Students
      $scope.students = [];

      //Reload Students
      loadStudents("C");
    });
  };

  //Check to see if there is a Transport Logged in, if not then go to logIn
  var logIn = function(){
    if(!$cookies.getObject("Transporte")) $location.path("/logIn").search({origin:"Transporte"});
    else{

      $scope.transport = $cookies.getObject("Transporte");

      loadStudents("C");

    }
  };

  //Log out
  $scope.logOut = function(){
    $cookies.remove("Transporte");
  };

  //Select a Student
  $scope.select = function(student){

      //Select the student
      student.selected = !student.selected;

      if(student.selected == true){

        //Deselect previous selected Student
        $scope.student.selected = false;

        //Put selected Student in scope
        $scope.student = student;

      }else{

        //Remove deselected Student from scope
        $scope.student = {};
      }
  };

  //Change Status to Blocked ("B")
  $scope.blockStudent = function(){

    //Prepare the student to be changed
    $scope.student.status.state = "B"

    //Send changes to Backend
    changeStudent($scope.student);
  };

  logIn();

  //Set Title of Page
  $rootScope.title = "Seredempia - Transporte";

  //Give Focus to Search Box
  $scope.focus = "pesquisa";
});
