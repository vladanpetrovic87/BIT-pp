// Write a program to check if the
// variable is a number. If it’s a
// number, check if it is divisible
// by 2. If it is, print the
// result, if not, show “X”

// Sample numbers: 10 | 7 (check one at the time)

// Output: 10 / 2 = 5 | X


var num = 10;
if(typeof num === "number") {
    if(num % 2 === 0) {
        console.log(num);
    }
    else {
        console.log('X')
    }
}