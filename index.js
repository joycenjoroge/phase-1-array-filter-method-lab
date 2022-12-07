// Code your solution here


function findMatching(drivers, name) {
    return drivers.filter(function (driver) { 
    return driver.toLowerCase() === name.toLowerCase();
    })
  }


function fuzzyMatch(drivers,name) {
    return drivers.filter(function(driver){ 
    return driver[0].substring(0)==name[0].substring(0);
    })
    
}

function matchName(drivers,arr){
   return drivers.filter(function(driver){
   return driver.name ===arr;
   }) 
}

