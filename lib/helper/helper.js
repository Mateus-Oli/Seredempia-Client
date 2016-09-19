//Helper Directive
//Creats lib for the Helper directive

//Create the module of the lib
angular.module("helper",[]);

angular.module("helper").run(function($templateCache){

  //HTML code of the directive
  $templateCache.put("views/helper.html",'<div class="help"><img ng-style="{float:side}" class="img-help" src={{image}}/><h4 style="margin:3%;"><b>{{title}}: </b><font ng-transclude></font><a ng-if="link" href={{link}}> Clique Aqui!</a></h4></div>');
});

angular.module("helper").directive("uiHelper", function(){
  return{
    //Path to the view
    templateUrl:"views/helper.html",

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
