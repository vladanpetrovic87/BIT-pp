// Write a JavaScript program to get the difference between a given number and 13, if
// the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11 Sample Input: 32
// Output : 2 Output : 38

var num = 32;
var num1 = 13;
var result = "";

if(num < num1) {
    result = num1 - num;
}
else if (num > num1) {
    result = 2 * (num - num1);
}
else {
    result = 0; 
}

console.log(result);