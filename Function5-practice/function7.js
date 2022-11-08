/*Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
se ne ponavljaju.*/

function nonRepeat(arr) {
  var arr1 = []
  for (var i = 0; i < arr.length; i++) {
      var count = 0;
      for (var j = 0; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
              count += 1
          }
      }
      if (count === 1) {
          arr1.push(arr[i])
      }
  }
  return(arr1);
}
var arr = [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8];
var result = nonRepeat(arr);
console.log(result);