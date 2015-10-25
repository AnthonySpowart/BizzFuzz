angular.module('fizzBuzzApp', [])
   .controller('FizzBuzzController', function($scope) {
     $scope.fromNumber = 0;
     $scope.toNumber = 15;
     $scope.fizzNumber = 3;
     $scope.buzzNumber = 5;

     $scope.update = function () {
       var numbers = [];
       var fromNum = parseInt($scope.fromNumber, 10);
       var toNum = parseInt($scope.toNumber, 10);
       for (var i=fromNum;i<=toNum;i++) {
         numbers.push(i);
       }
       $scope.numbersList = numbers;
     }
});
