//School API
//Send requests to server

angular.module("Seredempia").factory("schoolsAPI", function($http, config){

  //Get School LOG-IN
  var _getSchoolLogIn = function(cn, pa){
    return $http.get(config.baseUrl + "/schoolsCnPa/" + cn + "/" + pa);
  };

  //Return functions to be used
  return{
    getSchoolLogIn:_getSchoolLogIn,
  };
});
