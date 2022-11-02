/* 10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

function insertElement(a, e, p) {
  var newArray = [];
  for (var i = 0; i < a.length; i++) {
      if (i !== p) {
          newArray[newArray.length] = a[i];
      } else {
          newArray[newArray.length] = e;
          newArray[newArray.length] = a[i];
      }
  }
  return newArray;
}
console.log(insertElement([2, -2, 33, 12, 5, 8], 78, 3));