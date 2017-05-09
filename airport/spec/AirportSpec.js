'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });
  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });
});
