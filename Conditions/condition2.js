/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 */

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = 1;
var message = ''

if (a > b && a > c && a > d && a > e) {
  message = 'a';
} else if (b > a && b > c && b > d && b > e) { //ovde a vise ne moram da proveravam
  message = 'b';
} else if (c > a && c > b && c > d && c > e) { //ovde ni a ni b vise ne moram da proveravam
  message = 'c';
} else if (d > a && d > b && d > c && d > e) {
  message = 'd';
} else {
  message = '0';
}
console.log(message);
