/*Write a program that finds the minimum of a given array and prints out its value and
index.*/
var minimum = function arrayMin(x) {
  var currMin = 0;
  var currIndex = 0;
  for (var i = 0; i < x.length; i++) {
      if (x[i] < x[i + 1]) {
          currMin = x[i];
          currIndex = i;
      }
  }
  return [currMin, currIndex];
}
console.log(minimum([4, 2, 2, -1, 6]));