// Write a program that compares
// two numbers and display the
// larger. Result should be
// displayed in the console.

var x = 10;
var y = 5;
var message;


if(x > y) {
    message = 'Number ' + x + ' is larger then ' + y;
}
else if (y > x) {
    message = 'Number ' + y + ' is larger then ' + x;
}
else {
    message = "Number are equal!"
}

console.log(message);

