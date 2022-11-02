/* 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  
*/

function lastElement(array, p) {
  var last = [];
  var arrayIndex = array.length - 1;
  var x = array.length - p;
  var lastElements = [];

  last = array[arrayIndex];
  console.log('Last element of the array is: ' + last);

  var i = arrayIndex;
  for (var j = p; j > 0; j--) {
      lastElements[j - 1] = array[i];
      i--;
  }
  return lastElements;
}
console.log(lastElement([7, 9, 0, -2], 2));