/*9. Write a program that deletes a given element e from the  a a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output  a: [4, 6, 8] zadatak 9 */
var e= 2;
var a= [4, 6, 2, 8, 2, 2];

for (var i =  a.length - 1; i >= 0; i--){
    if ( a[i] == e)
         a.splice (i, 1);
}
console.log (a);