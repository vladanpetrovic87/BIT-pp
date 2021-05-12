/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */

var e = 3;
var a = [5, -4.2, 3, 7];
var j = "";

for(var i = 0; i < a.length; i++) {
    if(a[i] === e) {
        j = "yes";
        break;
    }
    else {
        j = "no";
    }
}

console.log(j);

/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */


var x = [-3, 11, 5, 3.4, -8];
var y = [];


for(var i = 0; i < x.length; i++) {
    if(x[i] > 0) {
        y[i] = x[i] * 2;
    }
    else {
        y[i] = x[i];
    }
}

console.log(y);


/* 3. Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

var x = [4, 2, 2, -1, 6];
var min = x[0];
var minInd = 0;

for (var i = 1; i < x.length; i++) {
    if (x[i] < min) {
        min = x[i];
        minInd = i;
    }
}

console.log(min + ',\t' + minInd);


/* 4. Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

var x = [4, 2, 2, -1, 6];
var min = Infinity;
var nextMin = Infinity;
for (var i = 0; i < x.length; i++) {
    if (min > x[i]) {
        nextMin = min;
        min = x[i];
    }
    else if (nextMin > x[i]) {
        nextMin = x[i];
    }
}

console.log(min, nextMin);


/* 5. Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

var y = [3, 11, -5, -3, 2];
var sum = 0;

for (var i = 0; i < y.length; i++) {
    if (y[i] > 0) {
        sum += y[i];
    }
}

console.log(sum);


/* 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

var arr = [2, 4, -2, 7, -2, 4, 2];

var result = true;

for (var start = 0, end = arr.length-1; start < end; start++, end--) {
    if (arr[start] !== arr[end]) {
        result = false;
    }
}

result ? console.log('Array is symetric') : console.log('Array is not symetric');


/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var j = 0;

for (var i = 0; i < a.length; i++) {
    j = 2 * i;
    c[j] = a[i];
    c[j + 1] = b[i];
}

console.log(c);


/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
var j = a.length;

for (var i = 0; i < a.length; i++) {
    c[i] = a[i];
    c[j] = b[i];
    j++;
}

console.log(c);


/* 9. Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2] */

var e = 2; a = [4, 6, 2, 8, 2, 2];
var b = [];
var j = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[j] = a[i];
        j++;
    } 
}
console.log(b);


/* 10. Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8] */

var arr = [2, -2, 33, 12, 5, 8], e = 78, p = 3;

var resArr = [];

for (var i = 0; i < arr.length; i++) {
    if (i === p) {
        resArr[resArr.length] = e; // Dodajemo na poslednji clan
    }
    resArr[resArr.length] = arr[i];
}

console.log(resArr);



