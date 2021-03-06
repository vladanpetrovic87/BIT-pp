// Write a JavaScript program to check two given numbers and print “true” if one of
// the number is 50 or if their sum is 50.
// Sample Input: 5,54 Sample Input: 6,50 Sample Input: 40,10

var num1 = 40;
var num2 = 10;
var result = num1 + num2;
var message = '';

if(result === 50 || num1 === 50 || num2 === 50) {
    message = 'true';
}
else {
    message = '-';
}

console.log(message);


