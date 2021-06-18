// Applications:

// Create constructor functions with properties representing the following:
// WebApp: name, url, technologies, licence, stars
// MobileApp: name, platforms, licence, stars

// All web applications should inherit methods:
// getData which prints out all the information
// reactBased which checks if one of the used technologies is React

// All mobile applications should inherit methods:
// getData which prints out all the informations
// forAndroid which checks if one of the platforms the application is developed for is Android

// Both web and mobile applications should inherit methods:
// isCCLicence  which checks if the licence of the application is CC (Creative Commons)
// like which increases the number of stars by one
// showStars which prints out the number of stars

function Web(name, licence, stars) {
  this.name = name;
  this.licence = licence;
  this.stars = stars;
}

Web.prototype.isCCLicence = function () {
  if (this.licence === "cc") {
    return true;
  } else return false;
};

Web.prototype.like = function () {
  this.stars += 1;
};

Web.prototype.showStars = function () {
  return "The number of stars is: " + this.stars;
};

function WebApp(name, url, technologies, licence, stars) {
  Web.call(this, name, licence, stars);
  this.url = url;
  this.technologies = technologies;
}

WebApp.prototype = Object.create(Web.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
  return (
    this.name +
    ", " +
    this.url +
    ", " +
    this.technologies +
    ", " +
    this.licence +
    ", " +
    this.stars
  );
};

WebApp.prototype.reactBased = function () {
  if (this.technologies.includes("React")) {
    return true;
  } else return false;
};


function MobileApp(name, platforms, licence, stars) {
  Web.call(this, name, licence, stars);
  this.platforms = platforms;
}

MobileApp.prototype = Object.create(Web.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {
  return (
    this.name + ", " + this.platforms + ", " + this.licence + ", " + this.stars
  );
};

MobileApp.prototype.forAndroid = function () {
  if (this.technologies.includes("Android")) {
    return true;
  } else return false;
};

var web1 = new Web("Mondo", "cc", "2");
var webApp1 = new WebApp("Blic", "https://blic.rs/", "php,React", "cc", 4);
var mobApp = new MobileApp("Facebook", "Android,IOS", "cc", 2);

console.log(web1);
console.log(webApp1);
console.log(mobApp);

mobApp.like();
console.log(mobApp.showStars());

console.log(webApp1.getData());
