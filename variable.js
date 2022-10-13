var result ='';

var num1 = -5
var num2 = -2
var num3 = -6
var num4 = -1
var num5 = 0

if(num1>num2 && num1>num3 && num1>4 && num1>num5) {
  result = num1;
}
else if(num2>num1 && num2>num3 && num2>4 && num2>num5) {
  result = num2;
}
 else if(num3>num1 && num3>num2 && num3>4 && num3>num5) {
  result = num3;
}
 else if(num4>num1 && num4>num2 && num4>3 && num4>num5) {
  result = num4;
}
else {
  result = num5;
}

console.log(result);