/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.*/

function sum(text, letter) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === letter) {
      result = text.indexOf(letter);
    }else{
        result = "-1";
    }
  }
  return result;
}
console.log(sum("marko", "c"));