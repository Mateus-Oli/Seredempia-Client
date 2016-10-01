//School Controller
//Controll the school view

angular.module("Seredempia").controller("schoolCtrl", function($scope, schoolsAPI ,studentsAPI, $filter){

  //Function to load Students from School
  var loadStudents = function(school){

    //Get Students from Backend
    studentsAPI.getStudentSchool(school).success(function(students){

      //Loaded Students
      $scope.students = students;

      //Last Selected student
      $scope.student = {};

      //Unchecking Selected all
      $scope.selectedAll = false;

      //Search Box
      $scope.pesquisa = "";

      //Number of Selected Students
      $scope.selected = 0;
    });
  };

  //Function to Change Students
  var changeStudents = function(students){

    //Send changes to Backend
    studentsAPI.putStudent(students).success(function(){

      //Empity Students
      $scope.students = [];

      //Reload Students
      loadStudents($scope.school)
    });
  }

  //Function to LOG-IN
  var logIn = function(cnpj, password){

    //School
    $scope.school = {};

    //Get the School that is Logging in
    schoolsAPI.getSchoolLogIn(cnpj, password).success(function(school){

      //Logged in school
      $scope.school = school;

      //Load Students of School
      loadStudents(school);
    });
  };

  //Information related to the LOG-IN (Temporary)
  cnpj     = "99999999999999";
  password = "Escola";

  //Logging in
  logIn(cnpj, password);

  //Select a Student
  $scope.select = function(student){
    //Select the student
    student.selected = !student.selected;

    if(student.selected==true){
      //Add  to number of selected students
      $scope.selected++;

      //Put selected Student in scope
      $scope.student = student;

    }else{

      //Subtract to number of selected students
      $scope.selected--;

      //Remove deselected Student from scope
      $scope.student = {};
    }

    //Check or uncheck Selected All
    if($scope.selected == $scope.students.length) $scope.selectedAll = true;
    else $scope.selectedAll = false;
  };

  //Select All Students
  $scope.selectAll = function(){

    //Remove individual student from scope
    $scope.student = {};

    //Select all students
    $scope.students.forEach(function(student){
      student.selected = $scope.selectedAll;
    });

    //IF deselected, number of selected students is 0
    $scope.selected = 0;

    //Add Selected if Selected All is true
    if($scope.selectedAll ) $scope.selected = $scope.students.length;
  };

  //Change Status to Confirmed ("C")
  $scope.confirmStudents = function(){

    //Array of selected Students
    students =[];

    //Get all Selected Students
    $scope.students.forEach(function(student){
      //Prepare Student to be changed
      if(student.selected){

        //remove the selected variable
        delete student.selected;

        //change the state of status
        student.status.state = "C";

        //puts student in array of students to be sent
        students.push(student);

      }
    });

    //Send changes to Backend
    changeStudents(students);
  };
});
