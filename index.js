// Code your solution in this file!
//slicing the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  //return the last two drivers
  const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
  }
  //selecting drivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  //creating a fare multiplier
  function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    };
  }
  //fare doubler
    function fareDoubler(fare) {
        const doubler = createFareMultiplier(2);
        return doubler(fare);
      }
      // fare tripler
      function fareTripler(fare){
        const tripler = createFareMultiplier(3);
        return tripler(fare);
      }
      //selecting drivers
      function selectDifferentDrivers(drivers, driverSelector) {
        return driverSelector(drivers);
      }