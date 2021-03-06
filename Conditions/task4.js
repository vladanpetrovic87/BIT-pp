// Write a conditional statement to
// find the sign of product of
// three numbers. Display the
// result in the console with the
// specified sign.

// Sample numbers: 3, -7, 2

// Output: The sign is -

var num1 = -3, num2 = -5, num3 = -10;
var message = '';

if((num1 * num2 * num3) < 0) {
    message = 'The sign is -';
}
else {
    message = 'The sign is +';
}

console.log(message);
