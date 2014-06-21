'use strict';

/**
 * @ngdoc function
 * @name szabiApp.controller:AttendancesheetCtrl
 * @description
 * # AttendancesheetCtrl
 * Controller of the szabiApp
 */
angular.module('szabiApp')
  .controller('AttendancesheetCtrl',
  ['$scope', '$rootScope', '$routeParams', '$localStorage',
  function ($scope, $rootScope, $routeParams, $localStorage) {
    $scope.$storage = $localStorage;
    var selectedDate = new Date();
    selectedDate.setMonth($routeParams.month);
    selectedDate.setDate(1);
    $scope.month = selectedDate;
    $scope.days = [];
    $scope.total = 0;
    var day = new Date(selectedDate.getTime());
    do {
      var type = $scope.$storage.categories[day.getDay() % 6 === 0 ? 1 : 0];
      for (var i = 0; i < $scope.$storage.holidays.length; ++i) {
         var dayStr = day.toISOString().substring(0,10);
         if ($scope.$storage.holidays[i].from <= dayStr && $scope.$storage.holidays[i].to >= dayStr) {
            type = $scope.$storage.holidays[i].type;
         }
      }
      var isWorkday = type === $scope.$storage.categories[0] || type === $scope.$storage.categories[4];
      if (isWorkday) {
         ++$scope.total;
      }
      $scope.days.push({date:new Date(day.getTime()), type: type, isWorkday: isWorkday});
      day.setDate(day.getDate() + 1);
    } while (day.getDate() > 1);
    $rootScope.fullScreen = true;
  }]);
