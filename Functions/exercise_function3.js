/* 1.  Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"
*/



var insertStringToPosition = function (string, additionalString, position) {
    position = position -1 || 0;
    if (position === 0) {
        return additionalString + string;
    }
    var result = '';

    for (var i = 0; i < string.length; i++) {
        if (i === position) {
            result += additionalString;
        }
        result += string[i];
    }
    return result;
}

var result = insertStringToPosition("My random string", "JS ", 10);

console.log(result);

/* 2. Write a program to join all elements of the array into a string skipping elements 
that are undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null] */

function joinElements(array) {
    var result = "";
    for (i = 0; i < array.length; i++) {
        var float = parseFloat(array[i]);
        var int = parseInt(array[i]);
        if (float == int && !isNaN(int)) {
            result += array[i];
        }
    } return result;
}
console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/* 3. Write a program to filter out falsy values from the array.
[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47] */

function filterFalsy(array) {
    var result = [];
    for (i = 0; i < array.length; i++) {
        if (array[i]) {
            result[result.length] = array[i];
        }
    } return result;
}
console.log(filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));


/* 4. Write a function that reverses a number. The result must be a number.
12345 -> 54321 // Output must be a number */










/* 5. Write a function to get the last element of an array. Passing a parameter 'n' will
return the last 'n' elements of the array.
[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2] */

function lastElement(array, num) {
    var result = [];
    if (num === undefined) {
        num = 1;
    }
    for (i = array.length - 1; i < array.length; i++) {
        result[result.length] = array[i];
    } return result;
}
console.log(lastElement([7, 9, 0, -2]));

/* 6. Write a function to create a specified number of elements with pre-filled numeric
value array.
6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

function multiply (num, element) {
    var result = [];
    for (i = 0; i < num; i++) {
        result[i] = element;
    }
    return result;
}
console.log(multiply(6, 0));

/* 7. Write a function that says whether a number is perfect.
28 -> 28 is a perfect number.
Note: According to Wikipedia: In number theory, a perfect number is a positive integer
that is equal to the sum of its proper positive divisors, that is, the sum of its positive
divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect
number is a number that is half the sum of all of its positive divisors (including itself).
E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors,
and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its
positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14.
This is followed by the perfect numbers 496 and 8128. */

function isPerfect(num) {
    var result = "";
    var divisors = 0;
    for (i = 0; i < num; i++) {
        if (num % i === 0) {
            divisors += i;
        }
        if (divisors === num) {
            result = true;
        } 
        else result = false;
    } 
    return result;
}

console.log(isPerfect(8));


/* 8. Write a function to find a word within a string.
'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times" */







/* 9. Write a function to hide email address.
"myemailaddress@bgit.rs" -> "mye...@bgit.rs" */

function hideEmail(email) {
    var result = "";
    var index;
    for (i = 0; i < email.length; i++) {
        if (i < 3) {
            result += email[i];
        }
    } result += "..."
    for (j = 0; j < email.length; j++) {
        if (email[j] == "@") {
            index = j;
        }
    }
    for (r = index; r < email.length; r++) {
        result += email[r];
    } return result;
}

console.log(hideEmail("myemailaddress@bgit.rs"));

/* 10. Write a program to find the most frequent item of an array.
[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] */




