/* 5.	Write a program that calculates a number of float values in the array.*/

function numOfFloats(a) {

  var counter = 0;

  for (var i = 0; i < a.length; i++) {

      var floatElement = parseFloat(a[i]);
      var intElement = parseInt(a[i]);
      var aFinitElement = isFinite(floatElement);

      if (aFinitElement && floatElement !== intElement) {
          counter++;
      }
  }
  return counter;
}
var floatsInArray = numOfFloats([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]);
console.log(floatsInArray);