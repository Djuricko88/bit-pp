var a =[ [1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];
 
for (var i in a) 
{
   console.log(i);
   for (var j in a[i]) 
     {
      console.log(" " + a[i][j]);
     }
}