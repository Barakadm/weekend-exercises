// shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

function Short(s) {
  let arr = s.split(" ").sort((b, a) => a.length - b.length);
  
  for (let index = 1; index < arr.length; index++) {
    if (arr[0].length === arr[index].length) {
      console.log(`this ${arr[0]} and ${arr[index]} are the longestwords`);
    } else {
      console.log(arr[0]);
    }
  }
  return;
}

Short("helghfhfhlo to you");
