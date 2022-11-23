/*7. Write a function to find and return the first, middle and last element of an array if the array
has odd number of elements. If number of elements is even, return just the first and the
last. In other cases (empty array), input array should be returned.*/

  function elementsOfArray (arr){
    'use strict'
    var result = [];
    if (arr.length < 1){
        result = arr; //return arr;
    }
    else if(arr.length % 2 === 0){
        result[0] = arr[0];
        result[1] = arr[arr.length - 1];
    }
    else if(arr.length % 2 !== 0){
        result[0] = arr[0];
        result[1] = arr[Math.floor(arr.length/2)];
        result[2] = arr[arr.length - 1];
    }

    return result;    

}
var arr = [1,2,3,4,5]
var func = elementsOfArray(arr);
console.log(elementsOfArray(arr));

