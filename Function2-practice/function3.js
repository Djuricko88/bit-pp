//Write a function that concatenates a given string n times (default is 1).
//"Ha" -> "Ha"
//"Ha", 3 -> "HaHaHa"

let string = "Ha";
let defaultCount = 1;
let count = 3;
function concatenates(str, count) {
    var array = [];
    for(var i = 0; i < count;)
        array[i++] = str;
    return array.join('');
}
console.log(concatenates("Ha",1));
console.log(concatenates("Ha",3));