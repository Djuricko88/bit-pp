/*Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3   zadatak3*/
var array = [4, 2, 2, -1, 6]
var index = 0;
var minimum = array[0];
for (var i = 0; i < array.length; i++) {
  if (minimum>array[i]) {
    minimum = array[i];
    index = i;
  }
}
console.log("Najmanja vrednost je:", minimum,"a indeks je:", index)