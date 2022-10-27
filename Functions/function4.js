//4. Write a program that calculates an arithmetic mean of four numbers. zadatak4

var values = [9, 10, 24, 80,];
function findArithmeticMean () {
var result = 0;
for (var i = 0; i < values.length; i++){
result += values[i];
}
console.log(result/values.length);
}
findArithmeticMean();