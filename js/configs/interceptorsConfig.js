//Interceptors Configuration
//Add interceptors

angular.module("Seredempia").config(function($httpProvider){

  //insert interceptors in array of interceptors
  $httpProvider.interceptors.push("timestampInterceptor");
});
