// Code your solution in this file
function findMatching(drivers, string) {
 return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  })
}
