// person constructor function
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
Person.prototype.fullName = function () {
  return this.name + " " + this.surname;
};
Person.prototype.printInfo = function () {
  console.log(this.fullName());
};
//inheritance
function Programmer(name, surname, favouriteLanguage) {
  Person.call(this, name, surname);
  this.favouriteLanguage = favouriteLanguage;
}
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
//inheritance
Programmer.prototype.printAdditionalInfo = function () {
  var fulllName = this.fullName();
  console.log(fulllName + " " + this.favouriteLanguage);
};
function BackEndDeveloper(name, surname, favouriteLanguage, database) {
  Programmer.call(this, name, surname, favouriteLanguage);
  this.database = database;
}
BackEndDeveloper.prototype = Object.create(Programmer.prototype);
BackEndDeveloper.prototype.constructor = BackEndDeveloper;
BackEndDeveloper.prototype.backendTestMethod = function () {
  console.log("test");
};
