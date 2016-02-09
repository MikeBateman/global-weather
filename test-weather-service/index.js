// Example tests
var assert = require('assert');

//Inject the apiClient to be tested
exports.testApi = function (apiClient) {

    describe('Weather API Tests', function () {
        
            it('Confirm that the apiClient is a object', function () {
                assert.equal(typeof apiClient, 'object');   
            });
            
            it('Confirm that the apiClient has a currentTemp function', function () {
                assert.equal(typeof apiClient['currentTemp'], 'function');
            });
            
            it('Confirm that the apiClient has a currentWind function', function () {
                assert.equal(typeof apiClient['currentWind'], 'function');
            });
            
            it('Confirm that the apiClient has a currentRain function', function () {
                assert.equal(typeof apiClient['currentRain'], 'function');
            });
        
    });
    
    return 0;
};
    