/*1. Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

 function Rotate_and_Print(arr,d,n)
 {
  var temp=new Array(n);
  let k = 0;
 
    for (let i = d; i < n; i++) {
        temp[k] = arr[i];
        k++;
    }
    for (let i = 0; i < d; i++) {
        temp[k] = arr[i];
        k++;
    }
    for (let i = 0; i < n; i++) {
        console.log(temp[i]+" ");
    }
 }
 let arr = [ 1,2,3,4,5,6];
let n = arr.length;
let d = 2;
Rotate_and_Print(arr, d, n);
 