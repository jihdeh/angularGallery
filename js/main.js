var myApp = angular.module('myApp', []);

myApp.factory('InstagramFactory', ['$http', function($http) {
  
  return {
    getData: function () { 
      var instaUrl = 'https://api.instagram.com/v1/media/popular?client_id=90508b73bb514af284d81874320842aa&callback=JSON_CALLBACK'
      $http(instaUrl).success(function (data) {
    console.log(data);
    }
  }
  })
}]);