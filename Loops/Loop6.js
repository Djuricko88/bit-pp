let text = "Eclip542se";

let myArray = text.split("");
let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTZ";
let myAlphabet = alphabet.split("");
let result = [];

for (let i = 0; i < myArray.length; i++) {
  for (let n = 0; n < myAlphabet.length; n++)
    if (myArray[i] == myAlphabet[n]) {
      result.push(myArray[i]);
    }
}

console.log(result.length);

//zadatak6