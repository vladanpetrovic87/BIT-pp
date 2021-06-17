// Create constructor functions with properties representing the following:
// Person: name, surname
// Employee: inherits Person and has job and salary
// Developer: inherits from Employee and has specialization
// Manager: inherits from Employee and has department
// All developers should inherit method:
// getSpecialization which prints out the name of the specialization

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }

  getData() {
    return this.name + " " + this.surname + " " + this.salary;
  }
  getSalary() {
    return console.log(this.salary);
  }
  increaseSalary() {
    return this.salary * 1.1;
  }
}

var employeeFirst = new Employee("Jovan", "Antic", "JSDeveloper", 1000);
console.log(employeeFirst);

class Developer extends Employee {
  constructor(name, surname, job, salary, specialization) {
    super(name, surname, job, salary);
    this.specialization = specialization;
  }

  getSpecialization() {
    console.log(this.specialization);
  }
}

var developerFirst = new Developer(
  "Ana",
  "Peric",
  "JSDeveloper",
  2000,
  "FullStack"
);
console.log(developerFirst);

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }

  getDepartment() {
    return console.log(this.department);
  }
  changeDepartment(newDepartment) {
    return (this.department = newDepartment);
  }
}

var managerFirst = new Manager(
  "Marko",
  "Markovic",
  "Boss",
  5000,
  "Top-managment"
);
console.log(managerFirst);
