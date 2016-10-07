//CPF filter
//Show CPF with ".", "/" "-"
//Ex: 99.999.999/9999-99

angular.module("Seredempia").filter("cnpj", function(){

  return function(input){
    //If input is empty return empty
    if(!input) return "";

    //Remove anything that is not a number
    input = input.replace(/[^0-9]+/g,"");

    //Insert ".", "/" and "/"
    return input.substring(0,2) + "." + input.substring(2,5) + "." + input.substring(5,8) + "/" + input.substring(8,12) + "-" + input.substring(12);
  };
});
