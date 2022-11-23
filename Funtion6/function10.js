function BMI(height, weight){
  let bmi = weight/Math.pow(height, 2);
  return bmi;
}

  let height = 1.79832;
  let weight = 77;
       
      // Function call
      let bmi = BMI(height, weight);
      process.stdout.write("The BMI is " + bmi + " so ");
       
      // Conditions to find out BMI category
      if (bmi < 15)
      console.log("starvation");
      else if (bmi < 17.5)
          console.log("anorexic");
      else if (bmi < 18.5)
          console.log("underweight");

      else if (bmi >= 18.5 && bmi < 25)
          console.log("Ideal");

      else if (bmi >= 25 && bmi < 30)
         console.log("overweight");

      else if (bmi >= 30 && bmi < 40)
          console.log("obese");
      else if (bmi >= 40)
          console.log("morbidly");

        