//Name filter
//First letters: Uppercase
//Others: Lowercase
//Ex: João dos Santos

angular.module("Seredempia").filter("name", function(){
  //Function to filter the name
  return function(input){
    var nomes = input.split(" ");
    var output = nomes.map(function(nome){
      if (/\sd[a,e,o,as,os]\s/g.test(nome.toLowerCase())) return nome.toLowerCase();
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    }).join(" ");
    return output;
  };
});
