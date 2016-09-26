//status filter
//Show full length status name

angular.module("Seredempia").filter("status", function(){

  return function(input){
    switch(input){
      case "N":
        return "Não Confirmado";

      case "W":
        return "Esperando";

      case "C":
        return "Confirmado";

      case "B":
        return "Bloqueado";
    };
    return input;
  };
});
