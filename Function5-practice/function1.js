/*1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
ispisuje u konzoli po jedan citat, ali tako da se citat promeni kada se program
pokrene.*/
var arr = ["The way to get started is to quit talking and begin doing. -Walt Disney",
"Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
"The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
"In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
"The purpose of our lives is to be happy. -Dalai Lama",
"Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin"]
function random (arr){
    var randomNumber = Math.floor(Math.random()*arr.length)
    return (arr[randomNumber]);
}
 var result = random (arr);
 console.log(result);