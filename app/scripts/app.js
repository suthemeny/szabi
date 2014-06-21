'use strict';

/**
 * @ngdoc overview
 * @name szabiApp
 * @description
 * # szabiApp
 *
 * Main module of the application.
 */
angular
  .module('szabiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/timesheet/:month', {
        templateUrl: 'views/timesheet.html',
        controller: 'TimesheetCtrl'
      })
      .when('/attendancesheet/:month', {
        templateUrl: 'views/attendancesheet.html',
        controller: 'AttendancesheetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
