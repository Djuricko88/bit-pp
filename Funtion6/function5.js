/*5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.*/

var numbers = [2, 4, 9, 2, 0, 16, 24]
var largest = numbers[0];
var smallest = numbers[0];

for (var i = 0; i < numbers.length; i++){
    var temp = numbers[i];
    if (temp > largest)
    {
        largest = numbers[i];
    }
    if (temp < smallest)
    {
        smallest = numbers[i];
    }
}
console.log(largest);
console.log(smallest);

/*const numbers = [2, 4, 6, 23, 30, 116, 244];

const smallest_number = Math.min(...numbers);
const largest_number = Math.max(...numbers);

console.log('Smallest Value:', smallest_number); 
console.log('Largest Value:', largest_number);*/     