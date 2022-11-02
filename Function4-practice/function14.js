/* 4.	Write a program that calculates a number of integer values in the array.
    Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3
*/

function numOfIntegers(a) {

  var counter = 0;

  for (var i = 0; i < a.length; i++) {

      var aFloatElement = parseFloat(a[i]);
      var aParseElement = parseInt(a[i]);

      if (aFloatElement == aParseElement) {
          counter++;
      }
  }

  return counter;
}
var integersInArray = numOfIntegers([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(integersInArray);