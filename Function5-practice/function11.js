/* +3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/

function studentGrade(s, g) {
  var studentsExame = '';
  var grades = [];
  for (var i = 0; i < s.length; i++) {
      if (g[i] <= 50) {
          grades[i] = 5;
          studentsExame += (s[i] + ' acquired ' + g[i] + ' points and failed to complete the exam.' + '\n');// \n is line break
      } else if (g[i] >= 51 && g[i] < 60) {
          grades[i] = 6;
          studentsExame += (s[i] + ' acquired ' + g[i] + ' points and earned ' + grades[i] + '.' + '\n')
      } else if (g[i] >= 61 && g[i] < 70) {
          grades[i] = 7;
          studentsExame += (s[i] + ' acquired ' + g[i] + ' points and earned ' + grades[i] + '.' + '\n')
      } else if (g[i] >= 71 && g[i] < 80) {
          grades[i] = 8;
          studentsExame += (s[i] + ' acquired ' + g[i] + ' points and earned ' + grades[i] + '.' + '\n')
      } else if (g[i] >= 81 && g[i] < 90) {
          grades[i] = 9;
          studentsExame += (s[i] + ' acquired ' + g[i] + ' points and earned ' + grades[i] + '.' + '\n')
      } else if (g[i] >= 91 && g[i] < 100) {
          grades[i] = 10;
          studentsExame += (s[i] + ' acquired ' + g[i] + ' points and earned ' + grades[i] + '.' + '\n')
      }
  }

  return studentsExame;
}
console.log(studentGrade(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [50, 39, 63, 72, 99, 51, 83, 59]));