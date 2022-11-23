/*Write a function named calculateDogAge that:
 takes 1 argument: your puppy&#39;s age.
 calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
 outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
Call the function three times with different sets of values.*/

function calculateDogAge(age) {
  var dogYears = 7*age;
  console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);