'use strict';

describe('Airport', function () {
  var airport;
  var plane;
  var weather;

  beforeEach(function () {
    plane = jasmine.createSpy('plane', ['land']);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('has no planes by default', function () {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for takeoff', function () {
    weather.isStormy.and.returnValue(false)
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('does not clear planes for takeoff if stormy', function(){
    weather.isStormy.and.returnValue(true);
    expect(function(){ airport.clearForTakeoff(plane) }).toThrowError('cannot take off during storm');
  });
  
  it('does not clear planes for landing if stormy', function(){
    weather.isStormy.and.returnValue(true);
    expect(function(){  airport.clearForLanding(plane) }).toThrowError('cannot take off during storm')
  });

});
