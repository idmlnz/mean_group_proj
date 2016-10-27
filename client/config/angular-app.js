/**
 * Created by imalonzo on 10/19/16.
 */

var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {

  console.log("in client/angular-app.js $routerProvider LOADED");

  $routeProvider
    .when('/', {
      templateUrl: '../partials/intro.html'
    })

    .when('/display', {
      //templateUrl: '../partials/display.html'
      templateUrl: '../partials/login.html'
    })


    .otherwise({
      redirectTo: '/'
    });




});