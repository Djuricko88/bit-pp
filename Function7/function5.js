//     5. Create a function that validates a password to conform to the following rules:
//     • Length between 6 and 24 characters,
//     • At least one uppercase letter (A-Z).
//     • At least one lowercase letter (a-z).
//     • At least one digit (0-9).
//     • Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
//     • Supported special characters: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
//     • Examples:  validatePassword("P1zz@") ➞ false  // Too short.
//     • validatePassword("iLoveYou") ➞ false      // Missing a number.
//     • validatePassword("Fhg93@") ➞ true       // OK!

function checkLength(password){
  let passLengthMess = "Password length must be between 6 and 24 characters!";
  if(password.length > 6 && password.length < 24) {   
     return true;
 } else {
     console.log(passLengthMess);
     return false;
 }
}
    //checkLength("papa");

function uppercaseLetter(password){
 let upperCaseMess = 'There is no uppercase letter in your password!';
 for (i=0; i<password.length;i++){
     if (password[i] === password[i].toUpperCase()){
         return true;              
 } else {
     console.log(upperCaseMess);
     return false;
 }
 }
}

// uppercaseLetter('radad');


function lowercaseLetter(password){
 let lowercaseMess = 'There is no lowercase letter in your password!';
    let lowercaseLetter = /[a-z]/;
     
if(lowercaseLetter.test(password)){
  return true;              
      } else {
          console.log(lowercaseMess);
          return false;
      }
      }

      //lowercaseLetter("DDDDDDDg");



     //  function lowercaseLetter(password){
     //     let lowerCaseMess = 'There is no lowercase letter in your password!';
     //     for (i=0; i<password.length;i++){
     //         if (password[i] !== password[i].toUpperCase()){
     //             return true;
     //     }
     // }
     // console.log(lowerCaseMess);
     // return false;
     // }
     //  lowercaseLetter('RHHHHHHg');    //this works
     

// function lowercaseLetter(password){
//     let lowerCaseMess = 'There is no lowercase letter in your password!';
//     for (i=0; i<password.length;i++){
//         if (password[i] === password[i].toLowerCase()){
//             return true;              
//     } else {
//         console.log(lowerCaseMess);
//         return false;
//     }
//     }
// }
//lowercaseLetter('HHHHHHH');


// function lowercaseLetter(password){
//     let lowercaseMess = 'There is no lowercase letter in your password!';
//     for (i=0; i<password.length;i++){
//         if (password[i] === password[i].toLowerCase()){
//             return true;              
//     } else {
//         console.log(lowercaseMess);
//         return false;
//     }
//     }
// }
// // lowercaseLetter('RADAAR');  


//     function atLeastOneDigit(password){
//         let digitMess = 'There is no digits in your password!';
//         for(i=0;i<password.length;i++){
//       if ((password[i]) === (password[i]).includes('0, 1, 2, 3, 4, 5, 6, 7, 8, 9')){        
//           return true;              
//         } else {
//             console.log(digitMess);
//             return false;
 
//         }
//     }
// }

//     atLeastOneDigit('Radar1');


// function atLeastOneDigit(password){
//     const digits = [0,1,2,3,4,5,6,7,8,9];
//     const atLeastOneDigitMess = 'There is no digits in your password!';
//     for(let i = 0; i < digits.length; i++){
//         if(password.includes(digits[i])){
//             return true;
//         }
//     }
//     console.log(atLeastOneDigitMess );
//     return false;
// }
// atLeastOneDigit("ssh");  ///this works


function atLeastOneDigit(password){
let digitMess = 'There is no digits in your password!';
let atLeastOneDigit = /\d/;

if(atLeastOneDigit.test(password)){
return true;              
 } else {
     console.log(digitMess);
     return false;
 }
 }

//         atLeastOneDigit('Radar1');


function maxRepetition(password){
let maxRepetitionMess = "Password mustn't contain 3 repeated characters!";
for(i=0;i<password.length;i++){
 if(password[i]===password[i+1] && password[i]===password[i+2]){
     console.log(maxRepetitionMess);
     return false;
 }else{
     return true; 
 }
}
}
// maxRepetition("rrrAda1")

// function specialCharacters(password){
//             let specialCharactersMess = 'There is no special characters in your password!';
//             for(i=0;i<password.length;i++){
//           if ((password[i]) === (password[i]).includes('! @ # $ % ^ & * ( ) + = _ - { } [ ] : ;  \' ? < > , .')){        
//               return true;              
//             } else {
//                 console.log(specialCharactersMess);
//                 return false;
     
//             }
//         }
//     }

//         specialCharacters("Radar1$");      //ne radi


function specialCharacters(password){
let specialCharactersMess = 'There is no special characters in your password!';
const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
 
if(specialChars.test(password)){
return true;              
  } else {
      console.log(specialCharactersMess);
      return false;
  }
  }

   //specialCharacters('Radar1');

function validatePassword(password) {
let checkLengthOfPassword = checkLength(password);
let checkUppercaseLetterPassword = uppercaseLetter(password);
let checkLowercaseLetterPassword = lowercaseLetter(password);
let checkAtLeastOneDigitPassword = atLeastOneDigit(password);
let checkMaxRepetitionPassword = maxRepetition(password);
let checkSpecialCharactersPassword = specialCharacters(password);
let successfulPassword = "Your password is valid!";
let unsuccessfulPassword = "Your password is not valid!";

if(checkLengthOfPassword && checkUppercaseLetterPassword  && checkLowercaseLetterPassword 
&& checkAtLeastOneDigitPassword && checkMaxRepetitionPassword && checkSpecialCharactersPassword) {

return successfulPassword;
} 


return unsuccessfulPassword;
}

console.log(validatePassword("Password1TTt$"));
