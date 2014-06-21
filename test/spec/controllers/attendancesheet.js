'use strict';

describe('Controller: AttendancesheetCtrl', function () {

  // load the controller's module
  beforeEach(module('szabiApp'));

  var AttendancesheetCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AttendancesheetCtrl = $controller('AttendancesheetCtrl', {
      $scope: scope,
      $rootScope: $rootScope,
      $routeParams: {month:1},
      $localStorage: {
        showEmployeeSettings: true,
        categories: [
            'workday',
            'weekend',
            'public holiday',
            'vacation',
            'extra workday'
        ],
        holidays:[{}]
    }
    });
  }));

  it('should attach a month to the scope', function () {
    expect(scope.month).toBeDefined();
    expect(scope.$storage).toBeDefined();
  });
});
