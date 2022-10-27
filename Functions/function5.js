/* 5.Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****  zadatak5 */

var number = 5;
var string = "";

for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
        if (i === 0 || i === number - 1) {
            string += "*"
        } else {
            if (j === 0 || j === number - 1) {
                string += "*";
            } else {
                string += " ";
            }
        }
    }

    string += "\n";
}

console.log(string);