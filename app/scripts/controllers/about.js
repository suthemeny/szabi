'use strict';

/**
 * @ngdoc function
 * @name szabiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the szabiApp
 */
angular.module('szabiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
