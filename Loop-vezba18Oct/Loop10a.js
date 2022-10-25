/*Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes* zadatak 1a*/

var e = 3;
var a = [5, -4.2, 3, 7];

var result = "";

for (var i = 0; i < a.length; i++) {
  if (e == a[i]) {
    result = "YES";
    break;
  } else {
    result = "NO";
  }
}

console.log(result);
