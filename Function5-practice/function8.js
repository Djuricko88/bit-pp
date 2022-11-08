/*Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
Primer 1: ([2, 3, 4, 5], N=2) =&gt; [[2, 3], [4, 5]]
Primer 2: ([2, 3, 4, 5, 6], N=3) =&gt; [[2, 3, 4], [5, 6]]*/

function splitArr(arr, n) {
  var arr1 = [];
  var arr2 = [];
  for (var i = 0; i < n; i++) {
    arr1.push(arr[i]);
  }
  for (var j = n; j < arr.length; j++) {
    arr2.push(arr[j]);
  }
  console.log(arr1, arr2);
}
splitArr([2, 3, 4, 5, 6], 3);