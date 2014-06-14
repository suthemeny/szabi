'use strict';

/**
 * @ngdoc function
 * @name szabiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the szabiApp
 */
angular.module('szabiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
