/* 1. Write a function that converts an array of strings into an array of numbers. Filter
out all non-numeric values.
Input: ["1", "21", undefined, "41", "1e+3", Infinity]
Output: [1, 21, 42, 1000] */

var x = ["1", "21", undefined, "41", "1e+3", Infinity];
var y = [];

function num(x) {
    for (var i = 0; i < x.length; i++) {
        y[i] = parseFloat(x[i]);
        if (isFinite(y[i])) {
            y[y.length] = y[i];
        }
    }
    return y; 
}

console.log(num(x));



/* 2. Write a program to join all elements of the array into a string skipping elements
that are undefined, null, NaN or Infinity.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: “015false-2247” */

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function joinElements(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && array[i] != null) {
            result += array[i];
        }
    } return result;
}

console.log(joinElements(array));



/* 3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: [15, -22, 47] */

function throwoutFalsy (array) {
    var result = [];
    var index = 0;
    for(i = 0; i < array.length; i++) {
        if(parseFloat(array[i])) {
            result[index] = array[i];
            index ++;
        }
    } return result;
}
console.log(throwoutFalsy([NaN, 0, 15, false, -22, "", undefined, 47, null]));


/* 4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 3 */

function numberOfIntegers (array) {
    var count = 0;
    for (i = 0; i < array.length; i++) {
        if(parseInt(array[i]) === parseFloat(array[i])) {   
            count++;
        }
    } return count;
}
console.log(numberOfIntegers([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));

/* 5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 2 */

function numberOfFloatValues (array) {
    var count = 0;
    for(i = 0; i < array.length; i++) {
        if((parseFloat(array[i]) !== parseInt(array[i])) && !isNaN(parseFloat(array[i]))) { 
            count++;                                           
        }
    } return count;
}
console.log(numberOfFloatValues([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));