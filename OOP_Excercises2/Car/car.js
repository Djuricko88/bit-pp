/*a)Create a Car class with properties (brand, model, motion) and methods (check motion, accelerate, break).
Check motion method should check the speed and returns if the car are in move or not (speed is greater than zero). Accelerate method should increase the speed for some number we provide.
Break method should decrease the speed for the number we provided (pay attention if the speed is negative number after decreasing).
b) Add the status method that displays all current data for the car (model, brand, motion state, speed => something like "Ford Mondeo is running at 150km/h, car is moving").
c) Add a new method to stop the car immediately (set the speed to 0). It doesn't need parameters.
d) Create a 3 car objects and test it!
 */


//with classes

class Car {
  constructor(brand, model, motion) {
    this.brand = brand;
    this.model = model;
    this.motion = motion;
    this.speed = 0;
  }
  
  checkMotion() {
    return this.speed > 0;
  }
  
  accelerate(speed) {
    this.speed += speed;
  }
  
  break(speed) {
    this.speed -= speed;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
  
  status() {
    let motionState = "not moving";
    if (this.checkMotion()) {
      motionState = "moving";
    }
    console.log(`${this.brand} ${this.model} is running at ${this.speed}km/h, car is ${motionState}`);
  }
  
  stop() {
    this.speed = 0;
  }
}

let myCar = new Car("KIA", "Proceed", "running");
let myCar2 = new Car("BMW","X5","running")
let myCar3 = new Car("FIAT","Punto","running")
myCar.accelerate(50); 
myCar.status();
myCar.break(30);      
myCar.status();
myCar.stop(); 
myCar.status(); 

myCar2.accelerate(50); 
myCar2.status();
myCar2.break(30); 
myCar2.status();
myCar2.stop(); 
myCar2.status(); 


myCar3.accelerate(50); 
myCar3.status();
myCar3.break(30); 
myCar3.status();
myCar3.stop(); 
myCar3.status()




//With construction functions


// function Car(brand, model, motion) {
//   this.brand = brand;
//   this.model = model;
//   this.motion = motion;
//   this.speed = 0;
// }

// Car.prototype.checkMotion = function() {
//   return this.speed > 0;
// }

// Car.prototype.accelerate = function(speed) {
//   this.speed += speed;
// }

// Car.prototype.break = function(speed) {
//   this.speed -= speed;
//   if (this.speed < 0) {
//     this.speed = 0;
//   }
// }

// Car.prototype.status = function() {
//   let motionState = "not moving";
//   if (this.checkMotion()) {
//     motionState = "moving";
//   }
//   console.log(`${this.brand} ${this.model} is running at ${this.speed}km/h, car is ${motionState}`);
// }

// Car.prototype.stop = function() {
//   this.speed = 0;
// }

// let myCar = new Car("KIA", "Proceed", "running");
// let myCar2 = new Car("BMW","X5","running")
// let myCar3 = new Car("FIAT","Punto","running")
// myCar.accelerate(50); 
// myCar.status();
// myCar.break(30);      
// myCar.status();
// myCar.stop(); 
// myCar.status(); 

// myCar2.accelerate(50); 
// myCar2.status();
// myCar2.break(30); 
// myCar2.status();
// myCar2.stop(); 
// myCar2.status(); 


// myCar3.accelerate(50); 
// myCar3.status();
// myCar3.break(30); 
// myCar3.status();
// myCar3.stop(); 
// myCar3.status(); 
