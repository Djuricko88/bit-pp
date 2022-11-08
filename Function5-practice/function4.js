/*Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
podataka pojedinačnih elemenata ulaznog niza.*/

const arr = [1, 'a', [], '4', 5, 34, true, undefined, null];
const groupDataTypes = (arr = []) => {
   const res = {};
   for(let i = 0; i < arr.length; i++){
      const el = arr[i];
      const type = typeof el;
      if(res.hasOwnProperty(type)){
         res[type].push(el);
      }else{
         res[type] = [el];
      };
   };
   return res;
};
console.log(groupDataTypes(arr));