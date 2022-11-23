/*6. Create a function that finds how many prime numbers there are, up to the given integer.
Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29*/

function isPrime(primeNumber) {
  let result = true;

  for(let i = 2; i <= primeNumber; i++) {
      if(primeNumber % i == 0 && primeNumber != i) {
          result = false;
          break;
          
      } 
  }

  return result;
}

//console.log(isPrime(12));

function primeNumbers(inputNumber) {
  let counter = 0;
  let resultArray=[];

     for(let i = 2; i < inputNumber; i++) {
      let isPrime1 = isPrime(i);
  
      if(isPrime1 == true) {
          counter = counter + 1;
          resultArray.push(i);
          
      }
  }

   return `There are ${counter} prime numbers up to the given integer, and those numbers are ${resultArray}.`;
}
  //return [counter, resultArray];



  console.log(primeNumbers(20));
  console.log(primeNumbers(30));