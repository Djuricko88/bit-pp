 /*10. Write a function that prints out the date of the previous day. 
Output:  23. 10. 2018. */

function writeDate() {
  var date = new Date();
  var day = date.getDate() + 1;
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
console.log(writeDate());