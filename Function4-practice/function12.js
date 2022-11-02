/* 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
    Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
    Output: “015false-2247”
    */

    function arrayToSTring(x) {
      var string = '';
  
      for (var i = 0; i < x.length; i++) {
  
          if (x[i] === null) {
              continue;
          }
          var currentElement = isFinite(x[i])
  
          if (currentElement) {
              string += x[i];
          }
      }
      return string;
  }
  
  var arrayOfElements = arrayToSTring([NaN, 0, 15, false, -22, '', undefined, 47, null]);
  console.log(arrayOfElements)