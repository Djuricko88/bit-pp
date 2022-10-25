/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] zadatak 2a*/

var arra = [-3, 11, 5, 3.4, -8];
//var secondArray = [-3, 11, 5, 3.4, -8];

var result = [];

for (var i = 0; i < arra.length; i++) {
  if (arra[i] > 0) {
    result = arra[i] * 2;
  } else {
    result = arra[i];
  }
  console.log(result);
}
