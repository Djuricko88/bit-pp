/*Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2  zadatak 4 */

var array = [4, 2, 2, -1, 6];
var minimum = array[0];
var minimum2 = array[0];

for (var i = 0; i < array.length; i++) {
    if (minimum>array[i]) {
      minimum = array[i];
      index = i;
    }
  }
  for (var i = 0; i < array.length; i++) {
    if (minimum2>array[i] && array[i]>minimum) {
      minimum2 = array[i];
    }
}
console.log("Druga najmanja vrednost je :" ,minimum2);