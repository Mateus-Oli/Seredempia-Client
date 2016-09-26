//School Controller
//Controll the school view

angular.module("Seredempia").controller("schoolCtrl", function($scope, schoolsAPI ,studentsAPI, $filter){

  //Information related to the LOG-IN (Temporary)
  cnpj     = "99999999999999";
  password = "Escola";

  //School Logged In
  $scope.school = {};

  //Last Student Selected
  $scope.student = {};

  $scope.selected = 0;
  //Select a Student
  $scope.select = function(student){
      //Select the student
      student.selected = !student.selected;
      $scope.selectedAll = true;


      if(student.selected==true){
        //Add  tonumber of selected students
        $scope.selected++;

        $scope.student.status = {};
        $scope.student.school = {};

        //Put selected Student in scope
        $scope.student.cpf = $filter("cpf")(student.cpf);
        $scope.student.name = $filter("name")(student.name);
        $scope.student.status.state = $filter("status")(student.status.state);
        $scope.student.status.date = $filter("month")(student.status.date);
        $scope.student.school.cnpj = $filter("cnpj")(student.school.cnpj);
        $scope.student.school.name = $filter("name")(student.school.name);

      }else{
        //Remove deselected Student from scope
        $scope.student = {};

        //Subtract to number of selected students
        $scope.selected--;
      }

      //If all selected check selectedAll
      $scope.students.forEach(function(student){
        if(!student.selected){
          $scope.selectedAll = false;
          return;
        }
      });
  };

  //Change Status to Confirmed ("C")
  $scope.confirmStudents = function(){
    students =[];
    //Get all Selected Students
    $scope.students.forEach(function(student){
      if(student.selected){
        delete student.selected;
        student.status.state = "C";
        students.push(student);

      }
    });

    //Reload Students
    $scope.students = [];
    students.forEach(function(student){
      console.log(student);
    })
    studentsAPI.putStudent(students).success(function(){
      studentsAPI.getStudentSchool($scope.school).success(function(students){
        $scope.students = students;

        //Removing Confirmed Student from scope
        $scope.student = {};
      });
    });
    //Unchecking Selected all
    $scope.selectedAll = false;
    //Cleaning search box
    $scope.pesquisa = "";

    //Subtracting number of selected students to 0
    $scope.selected = 0;
  };

  //Select All Students
  $scope.selectAll = function(){

    //Remove individual student from scope
    $scope.student = {};

    $scope.students.forEach(function(student){
      student.selected = $scope.selectedAll;

      //Add or Subtract depending of value of Selected All
      if($scope.selectedAll) $scope.selected++;
      if(!$scope.selectedAll) $scope.selected++;
    });
  };

  //GET the School that is Logging in
  schoolsAPI.getSchoolLogIn(cnpj, password).success(function(school){

    $scope.school = school;

    //GET the Students of the School
    studentsAPI.getStudentSchool(school).success(function(students){
      $scope.students = students;

      //Subtracting number of selected students to 0
      $scope.selected = 0;
    });
  });

});
