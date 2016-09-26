//Transport Controller
//Controll the transport view

angular.module("Seredempia").controller("transportCtrl", function($scope, transportsAPI ,studentsAPI){

  //Information related to the LOG-IN (Temporary)
  cnpj     = "77777777777777";
  password = "Transporte";

  //Transport Logged In
  $scope.transport = {};

  //Student Selected
  $scope.student = {};

  //Select a Student
  $scope.select = function(student){
      //Select the student
      student.selected = !student.selected;


      if(student.selected==true){
        //Deselect previous selected Student
        if($scope.student.status){
          $scope.student.selected = false;
        }
        //Put selected Student in scope
        $scope.student = student;

      }else{
        //Remove deselected Student from scope

        $scope.student = {};
      }
  };

  //Change Status to Blocked ("B")
  $scope.confirmStudents = function(){
    $scope.student.status.state = "B"
    studentsAPI.putStudent([$scope.student]).success(function(){
      //Reload Students
      studentsAPI.getStudentStatus("C").success(function(students){
        $scope.students = [];
        $scope.students = students;

        //Remove Blocked Student from scope
        $scope.student = {};
        //Clean search box
        $scope.pesquisa = "";
      });
    });
  };

  //GET the Transport that is Logging in
  transportsAPI.getTransportLogIn(cnpj, password).success(function(transport){

    $scope.transport = transport;

    //GET the Students of the School
    studentsAPI.getStudentStatus("C").success(function(students){
      $scope.students = students;
    });
  });

});
