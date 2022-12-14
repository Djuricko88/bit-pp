/*15.	Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

function starFrame(array) {
  var output = '';
  var sum = longestElement(array);

  // prvi red
  output += repeatElement('*', sum + 4) + '\n';
  // sredina
  for (var i = 0; i < array.length; i++) {
    var numOfSpaces = sum - array[i].length;
    output += '* ' + array[i] + repeatElement(' ', numOfSpaces) + ' *\n'
  }

  // zadnji red
  output += repeatElement('*', sum + 4);

  return output;
}


function repeatElement(el, numberOfRepeats) {
  var o = '';
  for (var i = 0; i < numberOfRepeats; i++) {
    o += el;
  }
  return o;
}


function longestElement(array) {
  var longest = array[0].length;

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest) {
      longest = array[i].length;
    }
  }
  return longest;
}


var niz = ["Hello", "World", "in", "a", "frame"];

console.log(starFrame(niz));