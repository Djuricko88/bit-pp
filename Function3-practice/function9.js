/* 9.	Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs"
*/

function hideAddress(a) {
  var newstring = '';
  var dot = ".";

  for (var i = 0; i < a.length; i++) {

      if (i < 3) {
          newstring += a[i];
      } else {
          if (a[i] == '@') {
              while (i < a.length) {
                  newstring += a[i];
                  i++;
              }
          } else {
              newstring += dot;
          }
      }
  }
  return newstring;
}
console.log(hideAddress("myemailaddress@bgit.rs"));