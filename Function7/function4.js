/*4. Create a function called celsiusToFahrenheit:
 Store a celsius temperature into a variable.
 Convert it to fahrenheit and output NN°C is NN°F
Create a function called fahrenheitToCelsius:
 Now store a fahrenheit temperature into a variable.
 Convert it to celsius and output NN°F is NN°C
*NN is actual temperature you need to convert*/
var celsius = 12;
var fahrenhiet = 90;

function celsiusToFahrenheit(celsius) {
  var fahre = (celsius * 9) / 5 + 32;
  var result = "";
  result = celsius + "°C" + " is " + fahre + "°F.";

  return result;
}


function fahrenheitToCelsius(fahrenheit) {
  var cels = ((fahrenheit - 32) * 5) / 9;
  var result = "";
  result = fahrenheit + "°F" + " is " + cels + "°C.";

  return result;
}

console.log(celsiusToFahrenheit(celsius));
console.log(fahrenheitToCelsius(fahrenhiet));


/* drugo resenje 

function celsiusToFahrenheit(celsius) {
  var celsiusInF = (celsius*9)/5 + 32;
  console.log(celsius + '°C is ' + celsiusInF + '°F');
}

function fahrenheitToCelsius(fahrenheit) {
  var fahrenheitInC = ((fahrenheit - 32)*5)/9;
  console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}

console.log(celsiusToFahrenheit(20));
console.log(fahrenheitToCelsius(68));*/