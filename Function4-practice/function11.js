/* 1.	Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000] 
*/


function convertArray(x) {

  var myArr = [];
  for (var i = 0; i < x.length; i++) {
      var currValue = x[i];
      var isVallid = isFinite(currValue);
      if (isVallid) {
          var number = parseFloat(currValue)
          myArr[myArr.length] = number;
      }
  }
  return myArr;
}

var filteredString = convertArray(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(filteredString)