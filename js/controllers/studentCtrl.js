//Student Controller
//Controll the student view

angular.module("Seredempia").controller("studentCtrl", function($scope, $rootScope,studentsAPI){

  //Chnages the status of Student ("N" --> "C")
  $scope.solicitar = function(cpf){

    //Get Student from Backend
    studentsAPI.getStudentCpf(cpf).success(function(student){

      //Clean CPF textbox
      $scope.cpf = "";

      //Verify existence of Student
      if(student){
        $scope.status = student.status.state;

        //Change Status
        if(student.status.state=="N"){
          student.status.state="W";

          //Send changes to Backend
          studentsAPI.putStudent([student]);
        }

        //Gotten Student
        $scope.student = student;
      }
      //If Student does not Exist
      else $scope.status = "I";
    });
  };

  //Set Title of Page
  $rootScope.title = "Seredempia - Estudante";

  //Give Focus to elemet with specific Name
  $scope.focus = "cpf";

  //Student on scope
  $scope.student = {};

  /*
  Status:
  N - Not Sent
  W - Waiting
  C - Confirmed
  B - Blocked
  I - Inexistent
  */

  //Status of Student on scope
  $scope.status = "";

});
