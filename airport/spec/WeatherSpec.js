'use strict';

describe('Weather', function(){
    var weather;
    
    beforeEach(function(){
        weather = new Weather();
    });

    it('can be stormy', function(){
        expect(weather.isStormy).toBeDefined();
    });

});