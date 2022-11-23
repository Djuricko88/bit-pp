/*3. Write a function named calculateSupply that:
 takes 2 arguments: age, amount per day.
 calculates the amount consumed for rest of the life (based on a constant max age).
 outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
X&quot;
Call that function three times, passing in different values each time.*/

function calculateSupply(age, numPerDay) {
  var maxAge = 100;
  var totalNeeded = (numPerDay * 365) * (maxAge - age);
  var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
  console.log(message);
}

calculateSupply(28, 36);
calculateSupply(28, 2.5);
calculateSupply(28, 400);