// Built in functions

//push

var someArray = [12, 33, 44];
var newLength = someArray.push(100);
console.log(someArray);
console.log(newLength);

//pop

var someArray = [12, 33, 44];
var deletedElement = someArray.pop();
console.log(someArray);
console.log(deletedElement);

//unshift
var someArray = [12, 33, 44];
var deletedElement = someArray.unshift();
console.log(someArray);
console.log(deletedElement);

//shift - izbacuje prvi element
var someArray = [12, 33, 44];
var deletedElement = someArray.shift();
console.log(someArray);
console.log(deletedElement);