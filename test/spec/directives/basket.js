'use strict';

describe('Directive: basket', function () {

  // load the directive's module
  beforeEach(module('jstestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<basket></basket>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the basket directive');
  }));
});
