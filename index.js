// Code your solution in this file
function findMatching(drivers,collection){
  returns drivers.filter(function (driverName){
    return driverName.toLowercase()===collection.toLowercase();
  })
}
