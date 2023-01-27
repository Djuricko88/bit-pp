// Create constructor functions with properties representing the following:
// WebApp: name, url, technologies, licence, stars
// MobileApp: name, platforms, licence, stars
 
// All web applications should inherit methods: 
// getData which prints out all the information
// reactBased which checks if one of the used technologies is React
 
// All mobile applications should inherit methods:
// getData which prints out all the information
// forAndroid which checks if one of the platforms the application is developed for is Android

// Both web and mobile applications should inherit methods:
// isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
// like which increases the number of stars by one
// showStars which prints out the number of stars 



class Apps {
  constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }
  
  isCCLicence() {
    if(this.licence === "CC") {
      return "it is CC licensed";
    } else {
      return "it is not CC licensed";
    }
  }
  
  like() {
    return this.stars++;
  }
  
  showStars() {
    return this.stars; 
  }
}

class WebApp extends Apps {
  constructor(name, url, technologies, licence, stars) {
    super(name, licence, stars);
    this.url = url;
    this.technologies = technologies;
  }
  
  getData() {
    return this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars;
  }
  
  reactBased() {
    if(this.technologies === "react") {
      return "it is made in react";
    } else {
      return "it is not made in react";
    }
  }
}

class MobileApp extends Apps {
  constructor(name, platforms, licence, stars) {
    super(name, licence, stars);
    this.platforms = platforms;
  }
  
  getData() {
    return this.name + " " + this.platforms + " " + this.licence + " " + this.stars;
  }
  
  forAndroid() {
    if (this.platforms === 'android') {
      return "its android app";
    } else {
      return "its not android app";
    }
  }
}

let madDog = new WebApp("Mad Dog", "http://somename.com", "react", "MIT", 200);
let strangeAndroidApp = new MobileApp("Strange app", "iOS", "CC", 150);

console.log(madDog.getData());
console.log(madDog.reactBased());
console.log(strangeAndroidApp.getData());
console.log(strangeAndroidApp.forAndroid());

console.log(madDog.isCCLicence());
console.log(strangeAndroidApp.isCCLicence());
console.log(strangeAndroidApp.like());
console.log(strangeAndroidApp.showStars());
