//CPF filter
//Show CPF with "." and "-"
//Ex: 999.999.999-99

angular.module("Seredempia").filter("cpf", function(){

  return function(input){
    //If input is empty return empty
    if(!input) return "";

    //Remove anything that is not a number
    input = input.replace(/[^0-9]+/g,"");

    //Insert "." and "-"
    return input.substring(0,3) + "." + input.substring(3,6) + "." + input.substring(6,9) + "-" + input.substring(9);

  };
});
