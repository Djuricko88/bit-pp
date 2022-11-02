/* 5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16
*/

function sumOfPositive(j) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
      if (j[i] > 0) {
          sum += j[i];
      }
  }
  return sum;
}
console.log(sumOfPositive([3, 11, -5, -3, 2]));