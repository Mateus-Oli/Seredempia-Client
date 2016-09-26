//Student Controller
//Controll the student view

angular.module("Seredempia").controller("studentCtrl", function($scope, studentsAPI){
  $scope.student = {};
  $scope.status = "";
  $scope.solicitar = function(cpf){
    studentsAPI.getStudentCpf(cpf.replace(/[^0-9]+/g,"")).success(function(student){
      $scope.cpf = "";
      if(student!=null){
        $scope.status = student.status.state;
        if(student.status.state=="N"){
          student.status.state="W";
          studentsAPI.putStudent([student]);
        }
        /*
        Status:
        N - Not Sent
        W - Waiting
        C - Confirmed
        B - Blocked
        */
        $scope.student = student;
      }
      else
        $scope.status = "I";
    });
  };
});
