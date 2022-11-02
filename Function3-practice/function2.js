/* 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/

function joinElements(a) {
  var string = '';
  var newA = [];
  for (var i = 0; i < a.length; i++) {

      if (isFinite(a[i]) === true && a[i] != null) {
          string += a[i];
      }

  }
  return string;
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));