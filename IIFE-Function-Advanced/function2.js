/*2.	Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”
*/

var str1 = "Programming in JS is super interesting!"
var newStr1 = "JS"

function replaceString(givenString, strToReplace){
    var word = givenString.split(" ")
    var replacement = "**"
    for (var i = 0; i < givenString.length; i++){
    if (word[i] === strToReplace){
    word[i] = replacement
    }
}
return word.join(" ")
}
console.log(replaceString(str1, newStr1))
