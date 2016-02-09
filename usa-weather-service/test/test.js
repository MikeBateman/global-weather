
// Mocha Tests
var assert = require('assert');

//Bring in the tests
var testWeatherService = require('test-weather-service');

//Bring in the USA Weather Service to be tested
var client = require('../index.js');

it('should return 0 when all tests have completed (Does not mean all tests have passed)', function () {
    
    //Run all the tests define in the test-weather-service package
    assert.equal(testWeatherService.testApi(client), 0);
     
});
