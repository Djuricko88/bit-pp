/*1.	Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true
Input: “1bser9re”
Output: false
*/

function is5InString(string) {
  var result = true;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 'number') {
      result = string[i];
      index=i;
    }
  }
  return result;
}


console.log(is5InString('1b895abd'));
