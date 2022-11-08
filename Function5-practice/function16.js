/* +8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB
*/

function reverseString(s) {
  var newString = '';
  var i = s.length - 1;
  while (i >= 0) {

      newString += s[i];
      i--;
  }
  return newString;
}
console.log(reverseString('Belgrade Institute of Technology'));