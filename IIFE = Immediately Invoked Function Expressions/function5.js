/*5.	Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28
*/

var octalNumber = 034;

var firstFunction = function () {
  return function (o) {
    return parseInt(o);
  }
};

var secondFunction = firstFunction();

console.log(secondFunction(octalNumber));