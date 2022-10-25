/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric. zadatak 6 */

var array = [2, 4, -2, 7, -2, 4, 2];
var symmetric = true;
for (var i = 0; i< array.length/2; i++){
    if(array[i] != array[array.length -i - 1])
    symmetric = false
}
if (symmetric)
    console.log ("The array is symmetric");
else
    console.log ("The array is not symmetric");