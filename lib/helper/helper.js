//Helper Directive
//Creates lib for the Helper directive

//Create the module of the lib
angular.module("helper", []);

//Create the HTML file for the directive
angular.module("helper").run(function($templateCache){

  //HTML code of the directive
  $templateCache.put("views/helper.html",'<div tabindex=0 class="help" ng-click="redirect(link)"><img ng-if="image" ng-style="{float:side}" class="img-help" ng-src="{{image}}"/><h4 style="margin:3%;"><b>{{title}}: </b><font ng-transclude></font><a ng-if="link" href={{link}}> Clique Aqui!</a></h4></div>');
});

//Creates the Directive itself
angular.module("helper").directive("uiHelper", function(){
  return{
    //Path to the view
    templateUrl:"views/helper.html",

    //Implement a controller in this directive
    controller:function($scope, $element, $attrs, $window){

      //redirect to the specied link
      $scope.redirect = function(link){
        if(link) $window.location.href = link;
      };
    },

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
      image: "@",
      side: "@",
      link: "@",
    },

    //Enable Code inside directive
    transclude:true,
  };
});
