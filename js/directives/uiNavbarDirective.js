//Menu Directive
//Helps create a bootstrap responsive menu

angular.module("Seredempia").directive("uiNavbar", function(){
  return{

    //Path to the view
    templateUrl:"views/partials/navbar.html",

    /*
      E = Element
      A = Attribute
      C = Class
      M = Comment
    */
    restrict:"E",

    scope:{
      /*
        (@) --> Exact Value
        (=) --> Variable Value
      */
      title: "@",
      User: "@"
    },
    
    //Enable Code inside directive
    transclude:true,
  };
});
