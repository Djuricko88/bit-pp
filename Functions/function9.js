/*Write a program that calculates the sum of odd elements of a given array.zadatak 9 */

function sumOdd(array) {
  var result = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
    } else {
      result += array[i];
    }
  }
  return result;
}
var result = sumOdd([1,2,3,4,5,6])
console.log(result);