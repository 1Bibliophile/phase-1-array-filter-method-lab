// Code your solution here
/*function findMatching(drivers, str){
    drivers.filter(function(str2){
        if(str === str2){
            return 
        }
    })
}
*/

const findMatching = (drivers, str) => drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());;


//function findMatching(drivers, str){
   /* const arr = []
    
    for(let i = 0; i < drivers.length; i++){
        if(drivers[i] === str){
            arr.push(drivers[i]);
        }
    }
    return arr;
    */

   /*return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
}*/

const fuzzyMatch = (drivers, str) => drivers.filter(driver => driver.startsWith(str))

/*function fuzzyMatch(drivers, str){
    const arr = []
    //let count = 0;

    //const match = [...drivers];

    for(let i = 0; i < drivers.length; i++){
        //match[i] = match[i].split("", str.length);

        if(drivers[i].startsWith(str))
        {
            arr.push(drivers[i])
            //count++;
        }

    }
    /*
    if(count != 0){
        return arr
    }
    
   return arr
}
*/

function matchName(drivers, str){
    let car = [];

    for(const driver of drivers){
        if(driver.name === str){
            car.push(driver)
        }
    }
    return car;
}