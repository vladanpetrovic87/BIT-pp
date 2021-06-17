// Create constructor functions with properties representing the following:
// Person: name, surname
// Employee: inherits Person and has job and salary
// Developer: inherits from Employee and has specialization
// Manager: inherits from Employee and has department
// All developers should inherit method:
// getSpecialization which prints out the name of the specialization

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
Person.prototype.getFullName = function () {
  return this.name + " " + this.surname;
};

function Employee(name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
  return this.name + " " + this.surname + " " + this.salary;
};
Employee.prototype.getSalary = function () {
  return console.log(this.salary);
};
Employee.prototype.increaseSalary = function () {
  return this.salary * 1.1;
};

// var employeeFirst = new Employee("Jovan", "Antic", "JSDeveloper", 1000);
// console.log(employeeFirst);

function Developer(name, surname, job, salary, specialization) {
  Employee.call(this, name, surname, job, salary);
  this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

// var developerFirst = new Developer("Ana", "Peric", "JSDeveloper", 2000, "FullStack");
// console.log(developerFirst);

Developer.prototype.getSpecialization = function () {
  console.log(this.specialization);
};

function Manager(name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
  return console.log(this.department);
};
Manager.prototype.changeDepartment = function (newDepartment) {
  return (this.department = newDepartment);
};

// var managerFirst = new Manager("Marko", "Markovic", "Boss", 5000, "Top-managment");
// console.log(managerFirst);
