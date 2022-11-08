/* 1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/
//KOMENTAR: Ovde ce ti uvek ispisivati 'My random JS string' sta god da uneses kao argument funkcije. Znas li zasto? :)

function insertString(string, position) {
  var newString = '';
  var existingString = 'My random string';

  if (position === 1) {
      newString = string + existingString;
  } else {
      for (var i = 0; i < position; i++) {
          newString += existingString[i];
      }
      newString += string;
      for (var j = i; j < existingString.length; j++) {
          newString += existingString[j];
      }
  }
  return newString;
}
console.log(insertString('JS ', 10));
