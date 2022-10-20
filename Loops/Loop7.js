let arr = [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];
let letter = "C";

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == letter.toLocaleLowerCase() || arr[i] == letter.toUpperCase()) {
    console.log(arr.indexOf(arr[i]));
  }
}

//zadatak7