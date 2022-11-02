/* 4.	Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number
*/

function reverseNum(n) {
  var number;
  var reverse = '';

  var nString = n.toString();
  var nElement = nString.length - 1;

  for (var i = nElement; i >= 0; i--) {
      reverse += nString[i];
  }
  number = parseFloat(reverse);
  return number;
}
console.log(reverseNum(12345));

//another solution

function reverseNum(n) {
  var number;
  var reverse = '';

  var nString = '';
  nString += n;

  var nElement = nString.length - 1;

  for (var i = nElement; i >= 0; i--) {

      reverse += nString[i];
  }
  number = parseFloat(reverse);
  return number;
}
console.log(reverseNum(12345));
