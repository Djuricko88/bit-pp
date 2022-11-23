function printAvg(arr, n)
{
  // Find average
    let avg = 0;
    for(let i = 0; i < n; i++)
        avg += arr[i];   
        avg = avg / n;
 
    // Print elements greater than average
    for(let i = 0; i < n; i++)
        if (arr[i] > avg)
            console.log(arr[i] + " ");
}

let arr = [5, 3, 6, 7, 9, 10];
let a = arr.length;
 
printAvg(arr, a);
     