/*zadatak 1b Input: e = 3, a = [5, -4.2, 18, 7]
Output: no*/
var e = 3;
var a =[5, -4.2, 18, 7]

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

