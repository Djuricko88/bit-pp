//4. Write a function to count the number of letter occurrences in a string.
//"My random string";, "n"; -> 2
function letterOccurrences(s, c) {
  let count = 0;
  for(ch of s) {
      if(c === ch) {
          ++count;
      }
  }
  return count;
}
console.log(letterOccurrences("My random string","n"));