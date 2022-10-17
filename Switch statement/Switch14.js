
let firstNumber = 17;
let secondNumber = 0;
let scoore = "-"

switch (scoore) {
  case "+" :
    console.log((result = firstNumber + secondNumber));
    break;
  case "-" :
    console.log((result = firstNumber - secondNumber));
    break;
  case "*" :
    console.log((result = firstNumber * secondNumber));
      break;
  case "/" :
    switch (secondNumber) {
      case 0:
        return ("second number");
        break;
        default:
          console.log((result = firstNumber / secondNumber));
          break;
    }
}
