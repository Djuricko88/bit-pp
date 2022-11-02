/* 4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var second = function secondSmall(x) {
  var sum = [];
  var small = [];
  for (var i = 0; i < x.length; i++) {
      for (var j = i + 1; j < x.length; j++) {
          if (x[i] > x[j]) {
              sum = x[i];
              x[i] = x[j];
              x[j] = sum;
          }
      }
  } console.log(x);
  for (var i = 0; i < x.length; i++) {
      if (x[i] < x[i + 1]) {
          small = x[i + 1];
          break;
      }
  }
  return small;
}
console.log(second([4, 2, 2, -1, 6]));