/*1. Write a function named tellFortune that:
 takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
 outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N kids.&quot;
Call that function 3 times with 3 different values for the arguments.*/

function tellFortune(numberOfChildren, partnerName, location, jobTitle) {
  return("You will be a " +jobTitle +" in " +location +", and married to " +partnerName +", with " +numberOfChildren +" kids.");
}

function tellFortune2(numberOfChildren, partnerName, location, jobTitle) {
  var future = "You will be a " +jobTitle +" in " +location +", and married to " +partnerName +", with " +numberOfChildren +" kids."
  return(future);
}
console.log(tellFortune("3", "Caroline ", "Milano", "Designer"));
console.log(tellFortune("2", "Aurora ", "Berlin", "Developer"));
console.log(tellFortune("2", "Diana", "Barselona", "Architecture"));
console.log(tellFortune2("1", "Tanja", "Belgrade", "Doctor"));
console.log(tellFortune2("1", "Mia", "Amsterdam", "Consultant"));
console.log(tellFortune2("1", "Nora ", "Paris", "Lawyer"));
