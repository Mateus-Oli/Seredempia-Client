//Name filter
//First letters: Uppercase
//Others: Lowercase
//IF First: First name
//Ex: joão Dos santos --> João dos Santos | João

angular.module("Seredempia").filter("name", function(){

  //Function to filter the name
  return function(input, first){

    //If input is empty return empty
    if(!input) return "";

    //Split name in words
    var nomes = input.split(" ");

    //First Letter of word is Upper Case
    var output = nomes.map(function(nome){
      if (/\sd[a,e,o,as,os]\s/g.test(nome.toLowerCase())) return nome.toLowerCase();
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });

    //Show only fist name
    if(first){
      return output[0];
    //Show all names
    }else{
      return output.join(" ");
    }

  };
});
