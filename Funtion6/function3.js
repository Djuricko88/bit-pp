/*3 Write a program that prints a multiplication table for numbers up to 12.*/

/*function multiplicationTab(n) {
  var result = "";
  var sum = 0;
   for(var i=1; i<=n ;i++){
     sum = i*3
   } result = sum// result = i + "*" + 3 + "=" + sum + "\n";//result += sum 
 
   return result;
}
var n = 12;
console.log(multiplicationTab(12))*/

function multiplication(num) {
  var result = "";
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
      sum = i * j;
      result += i + " * " + j + " = " + sum  + "\n";
    }
    result += "\n";
  }

  return result;
}
var num = 12;
var func = multiplication(num);
console.log(func);