/*Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
“pp”, “as23s”, “00sd”] = rezultat [“pp”].*/

function onlyLetters (str){
  var input = str.replaceAll(" ","").replaceAll(".","").replaceAll(",","").replaceAll("?","");
  for (let i=0;i<input.length;i++){
    if (!isNaN(input[i])){
      return null;
    }
}
return input;
}
//console.log(onlyLetters ("1 2?b,b"));
function onlyLettersString (arr) {
  let result = [];
  for (let i=0;i<arr.length;i++){
    let a = onlyLetters(arr[i]);
    if (a != null) {
      result.push(a)
    } //if
  } //for
  return result
} //funkcija
console.log(onlyLettersString (["12bb","pp", "as23s", "00sd"]));