/* 6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
*/

function symetric(a) {
  var sym = true;
  var j = a.length - 1;
  for (var i = 0; i < a.length / 2; i++) {
      if (a[i] === a[j]) {
          j--;
          continue;
      } else {
          sym = false;
      }
  }
  return sym;
}
console.log(symetric([2, 4, -2, 7, -2, 4, 2]));