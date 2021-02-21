// Ex2.4 - Unique
// There is an array with some numbers.
//  All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at
//  least 3 numbers.

function find(arr) {
  for (let i = 0; i < arr.length; ) {
    // console.log(arr[i+1]);

    if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) {
      console.log(arr[i]);
    }

    i++;
  }
  return;
}
find([0, 0,0 , 0, 3]);
