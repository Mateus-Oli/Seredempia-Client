//Transport API
//Send requests to server

angular.module("Seredempia").factory("transportsAPI", function($http, config){

  //Get School LOG-IN
  var _getTransportLogIn = function(cn, pa){
    return $http.get(config.baseUrl + "/transportsCnPa/" + cn + "/" + pa);
  };

  //Return functions to be used
  return{
    getTransportLogIn:_getTransportLogIn,
  };
});
