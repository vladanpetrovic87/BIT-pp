// Write a program to check if the
// number is divisible by 3 and 5.
// If it is, print that number.

// Sample numbers: 15, 12 (check one at the time)

// Output: 15

var num = 10;
var result = '';

if(num % 3 === 0 && num % 5 === 0) {
        result = num + ' is divisible by 3 and 5';
}
else if (num % 3 === 0) {
    result = num + ' is divisible by 3 but not by 5';
}
else if (num % 5 === 0) {
    result = num + ' is not divisible by 3 but is divisible by 5';
}
else {
    result = num + ' is not divisible by 3 and 5';
}


console.log(result);