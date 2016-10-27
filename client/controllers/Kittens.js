/**
 * Created by imalonzo on 10/17/16.
 */
console.log('angular Kitten.js loaded');

app.controller('KittensController', function($scope, $location, KittenFactory) {

  console.log('angular Kittens Controller loaded');

  KittenFactory.index(function(data) {
    $scope.kittens = data;
  });


  KittenFactory.getAllKittens(function(data) {
    $scope.kittens = data;

    var formattedData = [];
    var count = 0;
    var arr = [];
    for (var k = 0;  k < $scope.kittens.length; k++) {
      if (count <  4) {
         arr.push($scope.kittens[k]);
         count++;
      }
      else {
        k--;
        formattedData.push(arr);
        arr = [];
        count = 0;
      }
    }
    formattedData.push(arr);
    console.log('formatted: ', formattedData);
    console.log('formatted: ', formattedData[0][0]);
    console.log('formatted: ', formattedData[1][0]);
    console.log('formatted: ', formattedData[2][0]);

    console.log('formatted: ', formattedData[0][3]);
    console.log('formatted: ', formattedData[1][3]);
    console.log('formatted: ', formattedData[2][3]);
    $scope.kittens =  formattedData;

  });





})
