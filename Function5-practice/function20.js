/* +12.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9
*/

function commonDivisor(n, m) {
  var divisor = 1;
  for (var i = 1; i <= n; i++) {
      if (n % i === 0 && m % i === 0) {
          divisor = i;
          continue;
      } else {
          continue;
      }
  }
  return divisor;
}
console.log(commonDivisor(192, 42));
console.log(commonDivisor(81, 9));