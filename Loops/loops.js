//Write a program that will iterate from 0 to 10 and display squares of numbers.

for (var x = 0; x <= 10; x++) {
    console.log(x * x);
}


//1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
//number is odd or even, and display a message to the screen.

for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0 ) {
        console.log(i + ' is even number');
    } else {
        console.log(i + ' is odd number');
    }
}


//2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);


//3. Write a program to compute the sum and product of an array of integers.

var int = [1, 2, 3, 4, 5];
var sum=0;
var product=1;
for (var i = 0; i < int.length; i++) {
    sum += int[i];
    product *= int[i];
}

console.log('Sum: '+sum + '  Product: ' +product);


//4. Write a program which prints the elements of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var single="";

for (var i = 0; i < x.length; i++) {
    single += x[i] + '\n';
}

console.log(single);


//5. Write a program that prints the elements of the following array.

var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];

for (var i = 0; i < a.length; i++ ) {
    for (var x = 0; x < a[i].length; x++) {
        console.log(a[i][x]);
    }
}

//6. Write a program that outputs the sum of squares of the first 20 numbers.

var sum = 0;
for(var i = 0; i <= 20; i++) {
    sum += i * i; 
}

console.log(sum);

//7. Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.

var marks = [80, 77, 88, 95, 68];
var sum = 0;
var mark = "";

for(var i = 0; i < marks.length; i++) {
    sum += marks[i]; 
}

var average = sum / marks.length;

if (average < 60) {
    mark = "F";
}
else if (average < 70) {
    mark = "D";
}
else if (average < 80) {
    mark = "C";
}
else if (average < 90) {
    mark = "B";
}
else {
    mark = "A";
}

console.log(mark);


/* 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
"Fizz" or "Buzz" for numbers divisible by only one of those).

Note: This is actually an interview question that has been claimed to weed out a significant
percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel
good about yourself. */

for(var i = 0; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
    }
    else {
        if(i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz");
        }
        else {
            if(i % 5 === 0 && i % 3 === 0) {
                console.log("FizzBuzz");
            }
            else {
                console.log(i);
            }
        }
    }     
}