/*6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi
  poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
  broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).*/
  
function median(arr) {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
console.log(median([5, 6, 50, 1, -5]));
console.log(median([1, 2, 3, 4, 5]));