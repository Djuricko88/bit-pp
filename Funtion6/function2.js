/* 2 Write a function that takes a number and returns array of its digits.*/

function numReturn(x) {
  var newArray = [];
  if (typeof x === "number") {
      for(var i = 0; i < x; i++) {
          newArray.push(x);
      }
      return newArray;
  } else {
      return null;
  }
}
console.log(numReturn(4));

/*function numReturn(x){
  return Array.apply(null, Array(x)).map(Number.prototype.valueOf,x);
}
console.log(numReturn(10));*/

/*function numToArr(num){
  return num.toString().split('').map(Number);
}
var num = 1230945;
var result=numToArr(num);
console.log(result);*/