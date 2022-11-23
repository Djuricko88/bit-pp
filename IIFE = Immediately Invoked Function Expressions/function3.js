/*3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
*/

var string = 'prograMming';


var apparance = (function (scoore) {
	var scoore = '';
	var counter = 0;

	for (var i = 0; i < string.length; i++) {
		if (string[i] === 'm' || string[i] === 'M') {
			scoore += '*';
			counter++;
			continue;
		}
		scoore += string[i];
	}
	return [scoore, counter];

})(string);

console.log(apparance);