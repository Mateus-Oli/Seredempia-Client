//CPF mask directive
//Ex: 999.999.999-99

angular.module("Seredempia").directive("uiCpf",function(){
  return{
    //Requires the ngModel Directive
    require: "ngModel",

    link: function(scope, element, attrs, ctrl){
      //Function to format the CPF
      var _formatCpf = function(cpf){
        cpf = cpf.replace(/[^0-9]+/g,"");

        if(cpf.length>3){
          cpf = cpf.substring(0,3) + "." + cpf.substring(3);
        };
        if(cpf.length>7){
          cpf = cpf.substring(0,7) + "." + cpf.substring(7);
        };
        if(cpf.length>11){
          cpf = cpf.substring(0,11) + "-" + cpf.substring(11);
        };
        if(cpf.length>14){
          cpf = cpf.substring(0,14);
        };

        return cpf;
      };

      //When a key is pressed
      element.bind("keyup", function(){
        ctrl.$setViewValue(_formatCpf(ctrl.$viewValue));
        ctrl.$render();
      });
    },
  };
});
