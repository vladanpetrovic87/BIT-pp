/* 1. Write a program that calculates the maximum of two given numbers. */

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}


/* 2. Write a program that checks if a given number is odd. */

function isOdd(number) {
    return number % 2 !== 0;
}


/* 3. Write a program that checks if a given number is a three digit long number. */

function threeDigit (num) {
    return num >= 100 && num < 1000; 
}

console.log(threeDigit(200));


/* 4. Write a program that calculates an arithmetic mean of four numbers. */

function arithmetic (num1, num2, num3, num4) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

console.log(arithmetic(1, 2, 3, 4));

/* 5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
*   *
*   *
*   *
*****  */

// 1. nacin

function squareMe(num) {
    var out = "";
    var row = "";
    for (var i = 1; i <= num; i++) {
      /* creating elements in row */
      for (var j = 1; j <= num; j++) {
        var count = ""; //takes current value and adds it to the row
        if (i === 1 || i === num || j === num || j === 1) {
          count = "*";
        } else {
          count = " ";
        }
        row += count;
      }
      out += row;
      // console.log(row);
      row = "\n"; 
    }
    return out;
  }
  console.log(squareMe(10));


// 2. nacin

function drawSquare (n) {
    var square = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                square += '* ';
            }
            else if (j === 0 || j === n - 1) {
                square += '* ';
            }
            else {
                square += '  ';
            }
        }
        square += '\n';
    }
    return square;
  }

var square1 = drawSquare(4);
var square2 = drawSquare(5);
var square3 = drawSquare(10);

console.log(square1);


/* 6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *  */

function starOut() {
    var out = '';
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i]; j++) {
           out += '*';    
        }
        out += '\n';
    }
    return out;
}

console.log(starOut(3, 6, 10, 11));
  
      
/* 7. Write a program that calculates a number of digits of a given number. */

function numOfDigits (number) {
    var br = 0;
    for (var i = number; i > 1; i /= 10) {
        br++;
    }
    return br;
} 

var num = 999;
console.log(numOfDigits(num));


/* 8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3 */

function numberOfApp (a, e) {
    var br = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            br++;
        }
    }
    return br;
}

var a = [2, 4, 7, 8, 7, 7, 1], e = 7;

console.log(numberOfApp(a, e));


/* 9. Write a program that calculates the sum of odd elements of a given array. */

function sumOdd (x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 !== 0) {
            sum += x[i];
        }
    }
    return sum;
}

var x = [1, 2, 3, 4, 5];
console.log(sumOdd(x));


/* 10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A. */

function numberLetterA (y) {
    var br = 0;
    for (var i = 0; i < y.length; i++) {
        if (y[i] === 'a' || y[i] === 'A') {
            br++;
        }
    }
    return br;
}

var y = "Alabama";
console.log(numberLetterA(y));


/* 11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc. */

function concatenates (s, num) {
    var x = '';
    for (var i = 0; i < num; i++) {
        x += s;
    }
    return x;
}

var s = 'string';
var num = 5;
console.log(concatenates(s, num));



