/* +11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/

function ifPalindrome(s) {
  var j = s.length - 1;
  var palindrome = false;
  for (var i = 0; i < s.length; i++) {
      if (s[i] === s[j]) {
          palindrome = true;
          j--;
      } else {
          break;
      }
  }
  return palindrome;
}
console.log(ifPalindrome('a nut for a jar of tuna'));