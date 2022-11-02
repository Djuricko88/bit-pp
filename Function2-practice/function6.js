/*6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.*/

function lastOccurence(string, letter) {
  // var result;
 
   for (i = string.length - 1; i > 0; i--) {
     if (string[i] == letter) {
       result = i;
       break;
     } else {
       result = -1;
     }
   }
 
   return result;
 }
 
 var string = "My random string";
 var letter = "c";
 
 console.log(lastOccurence(string, letter));