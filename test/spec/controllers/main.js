'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('szabiApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a $storage to the scope', function () {
    expect(scope.$storage).toBeDefined();
    expect(scope.$storage.categories.length).toBeGreaterThan(0);
  });
});
