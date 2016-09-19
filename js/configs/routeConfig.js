//Routes Configuration
//Creates the Routes

angular.module("Seredempia").config(function($routeProvider){
  $routeProvider.when("/Menu",{
    templateUrl:"views/menu.html",
    controller:"menuCtrl",
  });
  $routeProvider.when("/Estudante",{
    templateUrl:"views/student.html",
    controller:"studentCtrl",
  });
  $routeProvider.when("/Escola",{
    templateUrl:"views/school.html",
    controller:"schoolCtrl",
  });
  $routeProvider.when("/Transporte",{
    templateUrl:"views/transport.html",
    controller:"transportCtrl",
  });

  //Default Route
  $routeProvider.otherwise({
    redirectTo:"/Menu",
  });
});
