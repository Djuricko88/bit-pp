/* 8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatenateArr(a, b) {
  var c = a;
  for (var i = 0; i < b.length; i++) {
      c[c.length] = b[i];
  }
  return c;
}
console.log(concatenateArr([4, 5, 6, 2], [3, 8, 11, 9]));