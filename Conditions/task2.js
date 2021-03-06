// Write a program to check if the
// number is divisible by 2. If it
// is, print even, if not, print
// odd.

// Sample numbers: 3, 4, 9 (check one at the time)

// Output: odd, even, odd

var x = 9, y = 4, z = 3;
var message = '';

if(x % 2 === 0) {
    message += 'Number ' + x + ' is even\n';
}
else {
    message += 'Number ' + x + ' is odd\n';
}

if(y % 2 === 0) {
    message += 'Number ' + y + ' is even\n';
}
else {
    message += 'Number ' + y + ' is odd\n';
}

if(z % 2 === 0) {
    message += 'Number ' + z + ' is even\n';
}
else {
    message += 'Number ' + z + ' is odd\n';
}

console.log(message);