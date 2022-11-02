/* 6.	Write a function to create a specified number of elements with pre-filled numeric value array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] 
*/

function createArray(n, value) {
  var array = [];

  if (value === 'undefined') {
      value = null;
  }
  for (var i = 0; i < n; i++) {
      array[array.length] = value;
  }
  return array;
}
console.log(createArray(2));