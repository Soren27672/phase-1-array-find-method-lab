
  const record = [ 
   { year: "2015", result: "W"},
   { year: "2014", result: "N/A"},
   { year: "2013", result: "L"},
   //...
 ]
 
 function superbowlWin(record) {
    let result = record.find(val => {
        if (val.result === 'W') return true;
        else return false;
    })
    if (result === undefined) return undefined;
    else return result.year;
  }