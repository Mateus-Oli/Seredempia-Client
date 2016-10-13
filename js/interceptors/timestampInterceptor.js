//Timestamp interceptor
//Prevent Cache

angular.module("Seredempia").factory("timestampInterceptor", function(){
  return {
    //On request do function
    request: function(config){

      //Get URL of request
      var url = config.url;

      //if there is no view do nothing
      if(url.indexOf("views")>-1) return config;

      //Create a timestamp using Date
      var timestamp = new Date().getTime();

      //Inserting timestamp on URL
      config.url = url + "?timestamp=" + timestamp;

      //Return config with new URL
      return config;
    },
  };
});
