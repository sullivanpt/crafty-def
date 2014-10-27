'use strict';

describe('Controller: PlayCtrl', function () {

  // load the controller's module
  beforeEach(module('craftyDefApp', function($provide) {
    $provide.decorator('$crafty',  function ($craftyMock) {
      return $craftyMock;
    });
  }));

  var PlayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayCtrl = $controller('PlayCtrl', {
      $scope: scope
    });
  }));

  it('should attach a dummy to the scope', function () {
    expect(scope.dummy).toBeTruthy();
  });
});
