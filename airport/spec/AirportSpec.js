'use strict';

describe('Airport', function () {
  var airport;
  var plane;
  beforeEach(function () {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('has no planes by default', function () {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for takeoff', function () {
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy conditions', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  it('does not clear planes for takeoff if stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ airport.clearForTakeoff(plane) }).toThrowError('cannot take off during storm');
  });

  it('does not clear planes for landing if stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){  airport.clearForLanding(plane) }).toThrowError('cannot take off during storm')
  });

});
