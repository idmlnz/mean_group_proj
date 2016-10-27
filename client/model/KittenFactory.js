/**
 * Created by imalonzo on 10/19/16.
 */





app.factory('KittenFactory', function($http) {
  var factory = {};

  factory.index = function(callback) {
    $http.get('/people').then(function(response) {
      callback(response.data);
    })
  }

  factory.getAllKittens = function(callback) {
    console.log('Kitten factory.getAllKittens()');
    $http.get('/kitten').then(function(response) {
      callback(response.data);
    })
  }



  return factory;
})