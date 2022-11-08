/*Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
samoglasnika i koliko suglasnika.*/

function vowel(str){
  var string = str.replaceAll(" ","").replaceAll(".","").replaceAll(",","").replaceAll("?","");
  //console.log(string);
  var count = 0;
  var counts = 0;
  for(var i = 0; i < string.length; i++){
  if(string[i] == 'a' || string[i] == 'i' || string[i] == 'o' ||string[i] == 'e' ||string[i] == 'u'){
      count+=1;
  }else counts +=1
  }
  return "Number of vowels is " + count + " and number od consonant is " + counts;
  }
  var result = vowel("rakia conne.cting peo?ple");
  console.log(result);