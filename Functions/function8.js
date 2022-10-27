/*Write a program that calculates a number of appearances of a given number in a given
array. zadtak 8*/
function appearances(array, number) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] == number) {
      result.push(array[i]);
    }
  }

  return result.length;
}
var result = appearances([2, 4, 7, 8, 7, 7, 1],7);
console.log(result);
