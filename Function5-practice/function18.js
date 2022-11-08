/* +10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false
*/

function ifPrime(n) {
  var prime = true;
  if (n !== 0 && n !== 1) {
      for (var i = 2; i < n; i++) {
          if (n % i === 0) {
              prime = false;
              continue;
          }
      }
  }
  return prime;
}
console.log(ifPrime(17));
console.log(ifPrime(15));