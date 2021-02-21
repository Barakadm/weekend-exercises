// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


const mysum = function (b) {
    let sum = 0;
    for (let i = 1; i < b+1; i++) {
        // console.log(sum);
        sum += i
    }
    return sum
}

console.log(mysum(8)); 