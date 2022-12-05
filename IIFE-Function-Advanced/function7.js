/*7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true
*/
function checkElem(arr1, arr2) {
       var result = arr1.every(element => {
           return arr2.indexOf(element) !== -1;
         });
         return result;
   }
   console.log(checkElem([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));
