// Ex2.6 - Years and Centuries
// The first century spans from the year 1 up 
// to and including the year 100, 
// The second - from the
// year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input , Output Examples ::
// centuryFromYear(1705) returns (18)
// centuryFromYear( 1900) returns (19)
// centuryFromYear(1601) returns (17)
// centuryFromYear(2000) returns (20)

function century(year) {
    let counter = 0
    for (let index = year; index > 0; ) {
        index = index - 100; 
        // console.log(index);
        counter = counter + 1 ;
        // console.log(counter);
        
    }
    return counter;
  }

  console.log(century(1801));