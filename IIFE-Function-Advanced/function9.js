/*9. Write a function that prints out the date of the next day. 
Output:  25. 10. 2018. */
 function writeDate() {
     var date = new Date();
     var day = date.getDate() - 1;
     var month = date.getMonth() + 1;
     var year = date.getFullYear();
     return `${day}.${month}.${year}`;
 }
 console.log(writeDate());