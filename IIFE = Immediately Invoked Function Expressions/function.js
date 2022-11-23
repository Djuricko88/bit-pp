/*1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]*/

var array = [4, 5, 11, 9];


(function (inputArray) {
	
	var num = inputArray[0];
	inputArray[0] = inputArray[inputArray.length - 1];
	inputArray[inputArray.length - 1] = num;

})(array);

console.log(array)