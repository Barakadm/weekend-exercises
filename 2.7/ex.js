// Your task is to create a function that does four basic .
// The function should take three arguments - operation(string/char),
//  value1(number), value2(number).
// The function should return result of numbers after
//  applying the chosen operation.
// Examples
// basicOp('+', 4, 7) // Output: 11
// basicOp('-', 15, 18) // Output: -3
// basicOp('*', 5, 5) // Output: 25
// basicOp('/', 49, 7) // Output: 7

function basicop(str, num1, num2) {
  // let defineop = parseInt(str)
  return eval(num1 + str + num2);
}

// function eval(x: string): any
// Evaluates JavaScript code and executes it.
// @param x — A String value that contains valid JavaScript code.


console.log(basicop("*", 3, 2));
