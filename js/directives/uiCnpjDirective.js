//cnpj mask directive
//Ex: 999.999.999-99

angular.module("Seredempia").directive("uiCnpj",function(){
  return{
    //Requires the ngModel Directive
    require: "ngModel",

    link: function(scope, element, attrs, ctrl){
      //Function to format the cnpj
      var _formatCnpj = function(cnpj){
        cnpj = cnpj.replace(/[^0-9]+/g,"");

        if(cnpj.length>2){
          cnpj = cnpj.substring(0,2) + "." + cnpj.substring(2);
        };
        if(cnpj.length>6){
          cnpj = cnpj.substring(0,6) + "." + cnpj.substring(6);
        };
        if(cnpj.length>10){
          cnpj = cnpj.substring(0,10) + "/" + cnpj.substring(10);
        };
        if(cnpj.length>15){
          cnpj = cnpj.substring(0,15) + "-" + cnpj.substring(15);
        };
        if(cnpj.length>18){
          cnpj = cnpj.substring(0,18);
        };

        return cnpj;
      };

      //When a key is pressed
      element.bind("keyup", function(){
        ctrl.$setViewValue(_formatCnpj(ctrl.$viewValue));
        ctrl.$render();
      });
    },
  };
});
