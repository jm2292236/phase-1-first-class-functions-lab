// Code your solution in this file!

// Receives an array and returns the first two elements in a new array
const returnFirstTwoDrivers = function (drivers) {
    // Parameters:
    //      - drivers (array)
    return drivers.slice(0, 2);;
}


// Receives an array and returns the last two elements in a new array
const returnLastTwoDrivers = function (drivers) {
    // Parameteres:
    //      - drivers (array)
    return drivers.slice(drivers.length - 2);;
}

// Creates an array of functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Receives a multiplier and returns a function to multiply a fare
function createFareMultiplier (multiplier) {
    // Parameters:
    //      - multiplier: Number of times the fare will be multiplied
    return fare => fare * multiplier;
}

// Creates a function that doubles a fare using the createFareMultiplier function
const fareDoubler = createFareMultiplier(2);
fareDoubler(5);

// Creates a function that doubles a fare using the createFareMultiplier function
const fareTripler = createFareMultiplier(3);
fareTripler(7);

// Creates a function to select either the first or the last two drivers depending on the function received as paramteter
// Parameters:
//      - drivers (array)
//      - funcToSelectDrivers: function to select drivers
function selectDifferentDrivers(drivers, funcToSelectDrivers) {
    return funcToSelectDrivers(drivers);
}


// tests
const driversSample = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
console.log('returnFirstTwoDrivers = ' + returnFirstTwoDrivers(driversSample));
console.log('returnLastTwoDrivers = ' + returnLastTwoDrivers(driversSample));
console.log(selectingDrivers);
myFunction = createFareMultiplier(4)
console.log('createFareMultiplier = ' + myFunction(3));
console.log('fareDoubler = ' + fareDoubler(5));
console.log('fareTripler = ' + fareTripler(7));
console.log('selectDifferentDrivers (first) = ' + selectDifferentDrivers(driversSample, returnFirstTwoDrivers));
console.log('selectDifferentDrivers (last) = ' + selectDifferentDrivers(driversSample, returnLastTwoDrivers));
