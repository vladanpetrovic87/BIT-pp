// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var duplicateAllElements = function (arr) {
    var duplicated = [];

    arr.forEach(function(elem) {
        console.log('From forEach: ', elem);
        duplicated.push(elem, elem);
    });

    return duplicated;
}

var sample = [2, 4, 7, 11, -2, 1];

var result = duplicateAllElements(sample);

console.log(result);



// function duplicateArray(array) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//         result.push(array[i], array[i]);
//     }
//     return result;
// }

// console.log(duplicateArray([2, 4, 7, 11, -2, 1]));


// function doubleValues(array) {
//     var newArray = [];
//     array.forEach(function (el) {newArray.push(el, el)});
//     return newArray;
// }

// console.log(doubleValues([2, 4, 7, 11, -2, 1]));


// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function removeDuplicate(array) {
    var emptyArray = [];
    for(var i = 0; i < array.length; i++) {
        if(emptyArray.include(array[i])) {
            emptyArray.push(array[i]);
        }
        
    }
    emptyArray.sort(function (a, b) { return a - b })
    return emptyArray;
}

console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));




// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }

// var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// var unique = array.filter(onlyUnique);


// console.log(unique);


// var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

// function removeDuplicates(arr) {
//     return arr.filter((value, index) => arr.indexOf(value) === index).sort(function(a, b) {
//         return a - b;
//     });
// }
// console.log(removeDuplicates(arr));



/*
3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */

function isOddNumberOfElements(array) {
    return array.length % 2 !== 0;
}
console.log(isOddNumberOfElements([1, 2, 9, 2, 1]));
/*
b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4
*/

function numOfElLessThanMidEl(array) {
    var indexOfMiddleEl = 0;
    var newArray = [];
  
    if (!isArrayOfOddNumOfElements(array)) {
      return 'The input array has an even number of elements.'
    }
  
    indexOfMiddleEl = Math.floor(array.length / 2);
  
    newArray = array.filter(function (element) {
      return element < array[indexOfMiddleEl];
    });
    
    return newArray.length;
  }
  
  var inputArray = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
  
  
  console.log(numOfElLessThanMidEl(inputArray));
  

/*
4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }
*/

function returnSmallest(array) {
    var min = array[0];
    array.forEach(function (element) {
        if (element < min) {
            min = element;
        }
    });
    var lastIndex = array.lastIndexOf(min);
    return {
        minElement: min,
        lastIndex: lastIndex,
    }
}

var something = returnSmallest([1, 4, -2, 11, 8, 1, -2, 3]);
console.log(something);


// 5.	
// a.	Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]

var inputArray = [2, 3, 8, -2, 11, 4];
var givenElement = 6;

var elementsLessThanAGivenElement = function (element) { // krace: var newArray = inputArray.filter(e=>e < givenElement)
  return element < givenElement;
}

var newArray = inputArray.filter(elementsLessThanAGivenElement);

console.log(newArray);


// b.	Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 	Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

var inputArray = ['JavaScript', 'Programming', 'fun', 'product'];
var subString = 'pro';

function findElementsWithProSubstring(array, term) {
  var newArray = array.filter(function (el) {
    return el.slice(0, term.length).toLowerCase() === term.toLowerCase();
  });

  return newArray;
}
console.log(findElementsWithProSubstring(inputArray, subString));



// c.	Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 


function filter(array, callback) {
  return array.filter(callback);
}

console.log(filter([1, 2, 8, 6, 7, 25], function (el) {
  return el < 6;
}));

// 6.	
// a.	Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
var products = [{
    name: 'apples',
    price: 100
  },
  {
    name: 'milk',
    price: 80
  },
  {
    name: 'bananas',
    price: 150
  }
];


// b.	Write a function that calculates the total price of your shopping list. 

// var totalPrice = products.reduce(function(currentTotal, product) {
//   return product.price + currentTotal;
// }, 0)

function calculateTotalPrice(shoppingList) {
  var total = 0
  shoppingList.forEach(function (e) {
    total += e.price;
  })
  return total;
}

console.log(calculateTotalPrice(products));

// c.	Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 

function calculateAveragePrice(shoppingList) {
  var total = 0;
  var averagePrice = 0;

  shoppingList.forEach(function (e) {
    total += e.price;
  })
  averagePrice = total / shoppingList.length;
  return averagePrice;
}

console.log('Average price: ' + calculateAveragePrice(products).toFixed(3));

// koristeci prethodnu f-ju:

function calculateAveragePrice(shoppingList) {
  var averagePrice = 0;
  return averagePrice = calculateTotalPrice(shoppingList) / shoppingList.length;
}

console.log(calculateAveragePrice(products));

// d.	Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. 

function printMostExpensive(shoppingList) {  
  var theMostExpensive;
  theMostExpensive = shoppingList.sort(function (a,b) {
    return b.price - a.price;
  })
  console.log(shoppingList[0].name.toUpperCase());
}

printMostExpensive(products);


// 7.	
// a.	Write a function that checks if a given string is written in all capitals.

var inputString = '5AAA3';

var isInAllCapitals = function (string) {
  return string.toUpperCase() === string;
}

console.log(isInAllCapitals(inputString))

// b.	Write a function that checks if a given string contains any digits. // String - split('') some()

function isContainsDigit(string) {

  var array = string.split('');
  console.log(array);

  function isDigit(e, array) {
    return typeof (e) == 'number';
  }
  return array.some(isDigit);
}

console.log(isContainsDigit(inputString));

// 
var inputString = '5AAA';
var regex = /\d/;
var isContainsDigit = regex.test(inputString);
console.log(isContainsDigit);


function hasDigits(string) {
  /*for (var i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      return true;
    }
  }
  return false;*/

  hasNum = string.split('').some(function(e) {
    return !isNaN(parseInt(e))
  })

  return hasNum;
}


console.log(hasDigits('AAA5'));

// c.	Write a function that checks if a given string is a valid hexadecimal color.

function isHexadecimalColor(string) {
  if (string.charAt(0) === '#' && string.length === 7) {
    return 'It is valid color';
  } else {
    return 'It is not valid color';
  }
}

console.log(isHexadecimalColor('#ffffff'));

// d.	Write a function that checks if a given number belongs to the interval from 1900 to 2018. 

function isNumInInterval(num, start, end) {
  if (num >= start && num <= end) {
    return true;
  } else {
    return false
  };
}

console.log(isNumInInterval(1100, 1900, 2018));

// e.	Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function Validator (str, pw, color, year, start, end) {
  this.stringValidator = isInAllCapitals(str);
  this.passwordValidator = hasDigits(pw);
  this.colorValidator = isHexadecimalColor(color);
  this.yearValidator = isNumInInterval(year, start, end);
}

var logIn1 = new Validator('Vesna', '1234', '#ffffff', 2021, 1900, 2018);

console.log(logIn1);

console.log(logIn1.hasDigits());
  
// 8.	Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days

var birthday = new Date('05/14/2021');


function numOfDaysToBirthday(bDay) {
  var today = new Date();
  var diff = bDay.getTime() - today.getTime();
  var msInDays = 1000 * 3600 * 24;
  return diff / msInDays;
}
 

var daysToBDay = Math.round(numOfDaysToBirthday(birthday)); // da li je ovde trebalo Math.round?
console.log((daysToBDay));


// 9.	Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 9 seconds


var departureTime = '08:22:13';
var arrivalTime = '11:43:22';

function tripDurationCalculator(aT, dT) {
  var date = 'May 23, 2021 ';
  var aT = new Date(date + aT);
  var dT = new Date(date + dT);

  var msDiff = aT - dT;
  var hDiff = msDiff / 1000 / 3600;
  var hours = Math.floor(hDiff);
  var minutes = Math.floor((hDiff - hours) * 60);
  var seconds = Math.floor(((hDiff - hours) * 60 - minutes) * 60);

  return [hours, minutes, seconds];
}

time = tripDurationCalculator(arrivalTime, departureTime);

console.log(time[0] + ' hours ' + time[1] + ' minutes ' + time[2] + ' seconds');


// 10.
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

function createPoints() {
    return Array.from({length: 3}, () => Math.floor(Math.random() * 10));
}

var point1 = createPoints();
var point2 = createPoints();

console.log(point1, point2);

// b. Write a function that calculates the distance between two points in the space.

function calculateDistance(p1, p2) {
    var distance = Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
    return Math.round(distance);
}

console.log(calculateDistance(point1, point2));


// 11.	
// a.	Write a function that generates a random integer value between 5 and 20.

var start = 5;
var end = 21;

function generateRandomInt5To20(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

var randomInt = generateRandomInt5To20(start, end);

console.log((randomInt));

// b.	Write a function that generates a random integer value between 50 and 100. 

var start = 50;
var end = 101;

function generateRandomInt50To100(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}

var randomInt = generateRandomInt50To100(start, end);

console.log((randomInt));

// c.	Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function.    

var num = 5;

function arrayOfRandomNum(n) {
    return Array.from({length: n}, function() {
        return Math.floor(Math.random() * (100 - 50) + 50);
    });
}
 
console.log(arrayOfRandomNum(num));


// 12. Write a function that shuffles the elements of a given array.

// Input: [3, 6, 11, 2, 9, 1]

// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)


function shufflesElementsOfArray(array) {
    return shuffle = array.sort(function() { return 0.5 - Math.random()});
}

var inputArray = [3, 6, 11, 2, 9, 1];
console.log(shufflesElementsOfArray(inputArray))