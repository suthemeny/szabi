'use strict';

/**
 * @ngdoc function
 * @name szabiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the szabiApp
 */
angular.module('szabiApp')
  .controller('MainCtrl', ['$scope', '$localStorage', function ($scope, $localStorage) {
    $scope.$storage = $localStorage.$default({
        showEmployeeSettings: true,
        categories: [
            'workday',
            'weekend',
            'public holiday',
            'vacation',
            'extra workday'
        ],
        holidays:[{}]
    });
  }]);
