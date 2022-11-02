/*8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.*/

 function isPrime(num) {
     var prime = ""; 
     for(var i = num-1; i>1; i--) {
         if(num % i == 0) {
             prime = num + " it is not prime number";
             break;
         } else {
             prime = "it is prime number";
         }
     }
     return prime;
 }
 var result = isPrime(21);
  console.log(result);

