var fruit = "strawberry";

// if (fruit === "lemon") {
//   console.log("yellow");
// } else if (fruit === "apple") {
//   console.log("green");
// } else if (fruit === "orange") {
//   console.log("orange");
// } else if (fruit === "strawberry") {
//   console.log("red");
// } else {
//   console.log("unknown fruit");
// }

switch (fruit) {
  case "banana":

  case "lemon":
    console.log("yellow");
    break;
  case "apple":
    console.log("green");
    break;
  case "orange":
    console.log("orange");
    break;
  case "strawberry":
    console.log("red");
    break;

  default:
    console.log("unknown fruit");
    break;
}

//1. 2. Write a program that shows text representation of a day in a week for a number input from
// 1 to 7. All other cases output a message explaining that input must be a number between 1
// and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.

var day = 11;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Input must be a number between 1 and 7");
    break;
}

//3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day
// is a weekday or weekend. All other cases output a message explaining that input must be a
// number between 1 and 7.
// For input 2, output should be “It’s weekday”.
// For input 6, output should be “It’s weekend”.
// For input 12, output should be “Input must be number between 1 and 7”.

var day = 1;
var result = "";

switch (day) {
  case 1:

  case 2:

  case 3:

  case 4:

  case 5:
    result = "It’s weekday";
    break;
  case 6:

  case 7:
    result = "It’s weekend";
    break;

  default:
    result = "Input must be a number between 1 and 7";
    break;
}

console.log(result);

//4. Write a program that for a 1-12 number input (representing a month in a year) shows that
// month’s name. All other cases output a message explaining that input must be a number
// between 1 and 12.
// For input 2, output should be “February”.
// For input 6, output should be “June”.
// For input 13, output should be “Input must be a number between 1 and 12”.

var month = 1;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("Input must be a number between 1 and 12");
    break;
}

//5. Write a program that for a 1-12 number input (representing a month in a year) shows what
// season it is. All inputs different from 1-12 output a message explaining that input must be a
// number between 1 and 12.

var month = 1;
var result = "";

switch (month) {
  case 1:

  case 2:

  case 3:
    result = "Winter";
    break;
  case 4:

  case 5:

  case 6:
    result = "Spring";
    break;
  case 7:

  case 8:

  case 9:
    result = "Summer";
    break;
  case 10:

  case 11:

  case 12:
    result = "Autumn";
    break;

  default:
    result = "Input must be a number between 1 and 12";
    break;
}

console.log(result);

// 6. Write a program that for a string input of a grade from “A”-“F” outputs a proper info
// message about that grade in the following manner: A - "Good job";, B - "Pretty good";, C -
// "Passed";, D - "Not so good";, F - "Failed";. Input different from letters A-F outputs a message
// "Unknown grade";.

var grade = "A";

switch (grade) {
  case "A":
    console.log("Good job");
    break;
  case "B":
    console.log("Pretty good");
    break;
  case "C":
    console.log("Passed");
    break;
  case "D":
    console.log("Not so good");
    break;
  case "F":
    console.log("Failed");
    break;

  default:
    console.log("Unknown grade");
    break;
}

//7. Write a program that takes as input a city name and outputs the country where the city is.
// You may choose which cities and countries you want to output yourself, however there has
// to be at least 5 countries and 15 cities. Note that each country must have a different
// number of cities. Input different from the listed cities should output a message&quot;"Please choose a different city";.

var city = "Belgrade";

switch (city) {
  case "Belgrade":
    console.log("Serbia");
    break;
  case "Nis":
    console.log("Serbia");
    break;
  case "Manila":
    console.log("Phillipines");
    break;
  case "Tokio":
    console.log("Japan");
    break;
  case "Kyoto":
    console.log("Japan");
    break;
  case "London":
    console.log("England");
    break;
  case "Munchester":
    console.log("England");
    break;
  case "Berlin":
    console.log("Germany");
    break;
  case "Munchen":
    console.log("Germany");
    break;
  case "Rome":
    console.log("Italy");
    break;
  case "Venezia":
    console.log("Italy");
    break;
  case "Napoli":
    console.log("Italy");
    break;
  case "Birmingham":
    console.log("England");
    break;
  case "Newcastle":
    console.log("England");
    break;
  case "Novi Sad":
    console.log("Serbia");
    break;

  default:
    console.log("Please choose a different city");
    break;
}

//8. Write a program that takes as input two numbers and a string denoting the operation (“+”, “-
//     ”, “*”, “/”) and prints out the appropriate result. Watch out for division by zero!

var num1 = 5;
var num2 = 0;
var operation = "/";
switch (operation) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num1 === 0 || num2 === 0) {
      console.log("Watch out for division by zero!");
    } else {
      console.log(num1 / num2);
    }
    break;

  default:
    console.log("Unknown operation");
    break;
}
