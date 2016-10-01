//Routes Configuration
//Creates the Routes

angular.module("Seredempia").config(function($routeProvider){

  //Menu View
  $routeProvider.when("/Menu",{
    templateUrl:"views/menu.html",
    controller:"menuCtrl",
  });

  //Student View
  $routeProvider.when("/Estudante",{
    templateUrl:"views/student.html",
    controller:"studentCtrl",
  });

  //School View
  $routeProvider.when("/Escola",{
    templateUrl:"views/school.html",
    controller:"schoolCtrl",
  });

  //Transport View
  $routeProvider.when("/Transporte",{
    templateUrl:"views/transport.html",
    controller:"transportCtrl",
  });

  //LOG-IN View
  $routeProvider.when("/logIn",{
    templateUrl:"views/logIn.html",
    controller:"logInCtrl",
  })

  //Default Route
  $routeProvider.otherwise({
    redirectTo:"/Menu",
  });
});
