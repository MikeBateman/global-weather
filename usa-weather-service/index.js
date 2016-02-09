//This is the USA Weather Service
exports.currentTemp = function () { 
    
    // This is the average highs for each month
    // As per http://www.usclimatedata.com/#
    var tempMonthData = [5.6, 6.7, 11.7, 17.8, 23.9, 28.3, 30.6, 28.9, 25.6, 19.4, 12.8, 7.2];
    return tempMonthData[new Date().getMonth()];
    
};

exports.currentWind = function () { return 25 };
exports.currentRain = function () { return false };
