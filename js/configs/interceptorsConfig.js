//Interceptors Configuration
//Add interceptors

angular.module("Seredempia").config(function($httpProvider){
  $httpProvider.interceptors.push("timestampInterceptor");
});
