function Apps(name, licence, stars) {
  this.name = name;
  this.licence = licence;
  this.stars = stars;
}

Apps.prototype.isCCLicence = function(){
  if(this.licence === "CC") {
      return "it is CC licensed";
  } else {
      return "it is not CC licensed";
  }
};

Apps.prototype.like = function() {
  return this.stars++;
};

Apps.prototype.showStars = function() {
 return this.stars; 
};

function WebApp(name, url, technologies, licence, stars) {
  Apps.call(this, name, licence, stars);
  this.url = url;
  this.technologies = technologies;
}

WebApp.prototype = Object.create(Apps.prototype);
WebApp.prototype.constructor = WebApp;


WebApp.prototype.getData = function() {
  return this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars;
};

WebApp.prototype.reactBased = function() {
  if(this.technologies === "react") {
      return "it is made in react";
  } else {
      return "it is not made in react";
  }
};

function MobileApp(name, platforms, licence, stars) {
  Apps.apply(this, [name, licence, stars]);
  this.platforms = platforms;
}

MobileApp.prototype = Object.create(Apps.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function() {
  return this.name + " " + this.platforms + " " + this.licence + " " + this.stars;
};

MobileApp.prototype.forAndroid = function() {
  if (this.platforms === 'android') {
      return "its android app";
  } else {
      return "its not android app";
  }
};

var madDog = new WebApp("Mad dog", "http://somename.com", "react", "MIT", 200);
var strangeAndroidApp = new MobileApp("Strange app", "iOS", "CC", 150);

console.log(madDog.getData());
console.log(madDog.reactBased());
console.log(strangeAndroidApp.getData());
console.log(strangeAndroidApp.forAndroid());

console.log(madDog.isCCLicence());
console.log(strangeAndroidApp.isCCLicence());
console.log(strangeAndroidApp.like());
console.log(strangeAndroidApp.showStars());