/*8. Write a function to find the average of N elements. Make the function flexible to receive
dynamic number or parameters.*/

function average(a, n)
      {
        var sum = 0;
        for (var i = 0; i < n; i++) 
        sum += a[i];
 
        return parseFloat(sum / n);
      }
      var arr = [5, 3, 6, 7, 5, 3];
      var n = arr.length;
      console.log(average(arr, n))
 
