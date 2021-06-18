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

class Web {
  constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
  }

  isCCLicence() {
    if (this.licence === "cc") {
      return true;
    } else return false;
  }

  like() {
    this.stars += 1;
  }

  showStars() {
    return "The number of stars is: " + this.stars;
  }
}

class WebApp extends Web {
  constructor(name, url, technologies, licence, stars) {
    super(name, licence, stars);
    this.url = url;
    this.technologies = technologies;
  }

  getData() {
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
  }

  reactBased() {
    if (this.technologies.includes("React")) {
      return true;
    } else return false;
  }
}


class MobileApp extends Web {
  constructor(name, platforms, licence, stars) {
    super(name, licence, stars);
    this.platforms = platforms;
  }

  getData() {
    return (
      this.name +
      ", " +
      this.platforms +
      ", " +
      this.licence +
      ", " +
      this.stars
    );
  }

  forAndroid() {
    if (this.technologies.includes("Android")) {
      return true;
    } else return false;
  }
}

var web1 = new Web("Mondo", "cc", "2");
var webApp1 = new WebApp("Blic", "https://blic.rs/", "php,React", "cc", 4);
var mobApp = new MobileApp("Facebook", "Android,IOS", "cc", 2);

console.log(web1);
console.log(webApp1);
console.log(mobApp);

mobApp.like();
console.log(mobApp.showStars());

console.log(webApp1.getData());
