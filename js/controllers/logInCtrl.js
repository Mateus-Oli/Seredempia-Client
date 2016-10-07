//Log-In Controller
//Controll the logIn view

angular.module("Seredempia").controller("logInCtrl", function($scope, $rootScope, $cookies , $location, transportsAPI ,schoolsAPI){

  //Function to Log-In (Transport or School)
  $scope.logIn = function(user,pass){
    //Get the School that is Logging in
    if(origin == "Escola"){
      schoolsAPI.getSchoolLogIn(user,pass).success(function(school){

        //Clean Password field
        $scope.pass="";

        //Show Error
        if(school == "CNPJ não cadastrado") $scope.error = "User";
        else if(school == "Password Incorreto") $scope.error = "Pass";

        else{

          //School in Cookies
          $cookies.putObject(origin,school);

          //Return to original View if Successful
          $location.path("/" + origin);
        }
      });
    };

    //Get the Transport that is Logging in
    if(origin == "Transporte"){
      transportsAPI.getTransportLogIn(user,pass).success(function(transport){

        //Clean Password field
        $scope.pass="";

        //Show Error
        if(transport == "CNPJ não cadastrado") $scope.error = "User";
        else if(transport == "Password Incorreto") $scope.error = "Pass";

        else{

          //Transport in Cookies
          $cookies.putObject(origin,transport);

          //Return to original View if Successful
          $location.path("/" + origin);
        }
      });
    };
  };

  //Send email to enable password change
  $scope.send = function(){
    //Temporary Solution, show all users and passwords
    alert("Para fins de conservação de tempo:\n"
    + "Transporte:\n\n"
    + "\tUsuario: '77.777.777/7777-77'\n"
    + "\tSenha  : 'Transporte'\n\n"
    + "Escola:\n\n"
    + "\tUsuario: '88.888.888/8888-88'\n"
    + "\tSenha  : 'Faculdade'\n\n"
    + "\tUsuario: '99.999.999/9999-999'\n"
    + "\tSenha  : 'Escola'");
  }

  //Set Title of Page
  $rootScope.title = "Seredempia - Log-In";

  //Give focus to element with specific ID
  $scope.focus = "user";

  //Get parameter tha indicate the original view
  var origin = $location.search().origin;

  //Title of Helper
  $scope.origin = origin;

  //Images of Helper
  if(origin=="Transporte") $scope.image = "images/transport.png";
  if(origin=="Escola") $scope.image = "images/school.png";
});
