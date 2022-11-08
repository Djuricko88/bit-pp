/* +-9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/

function numCombination(n) {
  var combo = [];
  var currentCombo = '';
  var count = 0;
  for (var i = 1; i <= (n + 1); i++) {
      //currentCombo = '';
      for (var j = i + 1; j <= n; j++) {
          currentCombo = '';
          currentCombo += (i + '.' + j);
          combo[combo.length] = currentCombo;
          count++;
          currentCombo = '';
          currentCombo += (j + '.' + i);
          combo[combo.length] = currentCombo;
          count++;
      }
  }

  return [combo, count];
}
console.log(numCombination(7));