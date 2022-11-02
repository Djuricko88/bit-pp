/*10.	Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
*/

function mostFrequent(a) {

  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < a.length; i++) {
      for (var j = i; j < a.length; j++) {
          if (a[i] == a[j])
              m++;
          if (mf < m) {
              mf = m;
              item = a[i];
          }
      }
      m = 0;
  }
  return item;
}
var mostFrequentItem = mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
console.log('Most frequent item of the array is ' + mostFrequentItem);