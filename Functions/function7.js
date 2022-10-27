//7. Write a program that calculates a number of digits of a given number. zadatak7
function numberOfDigits(n){
  let result = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    result++;
  }

  return result;
}
console.log(numberOfDigits(1000343490884773)); 