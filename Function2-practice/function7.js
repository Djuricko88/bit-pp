//7. Write a function to convert string into an array. Space in a string should be represented as
//“null” in new array.

function stringToArray(string) {
  var array = [];
  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      array[i] = null;
    } else array[i] = string[i];
  }
  return array;
}


  
  var string = "My random string";
  
  console.log(stringToArray(string));