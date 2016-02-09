# NPM Distributed Tests
 
## Introduction
All the countries in the world have decided that they want to create a unified way of collecting weather information.  
Each country is responsible for providing a service that allows users to request weather information.
The services will provide 3 functions:  

```javascript
currentTemp();
currentWind();
currentRain();
```

As part of this agreement, a collection of tests has been created in 'test-weather-service' packages.   
Each country is required to create a service that passes these tests.      
I have created two services 'uk-weather-service' and 'usa-weather-service' that depend on 'test-weather-service'.  
This repo is a example of how to layout distributed tests.  

## test-weather-service
 
The test-weather-service requires a service that is tobe tested tobe injected on this line.

```javascript
exports.testApi = function (apiClient)
```

## Implementing the tests

You will need to add the package test-weather-service.  

`npm install --save file:..\\test-weather-service`  
  
Created the test file 'test/test.js'.  
This is the default file that 'Mocha' will use to run tests.  
That file 'pulls' in the dependency on the 'test-weather-server' like this:  

```javascript
var testWeatherService = require('test-weather-service');
```

We then create a instance of the service we want to test and inject it into the tests.
```javascript
var client = require('../index.js');

it('should return 0 when all tests have completed (Does not mean all tests have passed)', function () {
    
    //Run all the tests define in the test-weather-service package
    assert.equal(testWeatherService.testApi(client), 0);
     
});
```
You can then run the tests in by running `mocha`.



