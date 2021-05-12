// 1. Write a function to check whether the `input` is a string or not.
// "My random string" -&gt; true
// 12 -&gt; false

var string = "My random string";

function checkString(string) {
  if (typeof string === "string") {
    return true;
  } 
    return false;
}

console.log(checkString(string));


/* 2. Write a function to check whether a string is blank or not.
&quot;My random string&quot; -&gt; false
&quot; &quot; -&gt; true
12 -&gt; false
false -&gt; false */

var string = "";

function checkString(string) {
  if (typeof string === "string") {
      if(string == "") {
          return true;
      }
      return false;
}
}

console.log(checkString(string));

/* 3. Write a function that concatenates a given string n times (default is 1).
&quot;Ha&quot; -&gt; &quot;Ha&quot;
&quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot; */

function concatenates (s, num) {
    var x = '';
    if(isFinite(s) === true) {
        for (var i = 0; i < num; i++) {
            x += s;
        }
    }
    else {
        x += s;
    }

    return s;

}

var s = 'Ha';
var num = 5;
console.log(concatenates(s, num));

/* 4. Write a function to count the number of letter occurrences in a string.
&quot;My random string&quot;, &quot;n&quot; -&gt; 2 */

function numberLetter (y) {
    var br = 0;
    for (var i = 0; i < y.length; i++) {
        if (y[i] === 'n') {
            br++;
        }
    }
    return br;
}

var y = "My random string";
console.log(numberLetter(y));

/* 5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. */



function occurence (string) {
    var result = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            result = i;
            break;
        }
        else {
            result = -1;
        }
    }
    return result;
}

var string = "My random string";
var letter = "r";

console.log(occurence(string, letter));

/*
======================================================================================
6. Write a function to find the position of the last occurrence of a character in a string.
The result should be in human numeration form. If there are no occurrences of the character,
function should return -1.
======================================================================================
*/


function positionOfLastOccurence(string, letter) {
    var index = 0;
    for (var i = string.length - 1; i > -1; i--) {
        if (letter == string[i]) {
            index = i;
            break;
        } else (index = -1);
    } return index;
}

console.log(positionOfLastOccurence("My random string", "n"));  //returns 14 because on index 14 is a last occurence of letter n
console.log(positionOfLastOccurence("This is some random string", "s"));//returns 20 because on index 20 is a last occurence of letter n
console.log(positionOfLastOccurence("This is some random string", "w")); //returns -1 because there is no letter w in this string

//ASK what is "The result should be in human numeration form." 



/*
======================================================================================
7. Write a function to convert string into an array. Space in a string should be
represented as “null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
======================================================================================
*/

function convertStringToArray(string) {
    var result = [];
    for (i = 0; i < string.length; i++) {
        if (string[i] != " ")
            result[i] = string[i];
        else if (string[i] == " ") {
            result[i] = "null";
        }
    } return result;
}

console.log(convertStringToArray("My random string"));
console.log(convertStringToArray("Random"));



/*
======================================================================================
8. Write a function that accepts a number as a parameter and checks if the number is
prime or not. Note: A prime number (or a prime) is a natural number greater than 1
that has no positive divisors other than 1 and itself.
======================================================================================
*/

function PrimeNumber(number) {
    var result = "";
    if (number === 1) {
        result = "The number 1 is not a prime nor a composite number";

    } else if (number === 2) {
        result = "The number 2 is a prime number";

    } for (i = 2; i < number; i++) {
        if (number % i == 0) {
            result = "The " + number + " is a composite number";
            break;

        } else {
            result = "The " + number + " is a prime number";
        }
    } return result;
}

console.log(PrimeNumber(11));


/*
======================================================================================
9. Write a function that replaces spaces in a string with provided separator.
If separator is not provided, use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
======================================================================================
*/

function replaceSpaces(string, separator) {
    if (separator == "") {
        separator = "-"
    }
    var result = [];
    for (i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            result[i] = string[i];
        } else if (string[i] == " ") {
            result[i] = separator;
        }
    } return result.join();
}

console.log(replaceSpaces("My random string", "_"));
console.log(replaceSpaces("My random string", "+"));
console.log(replaceSpaces("My random string", ""));         //This way returns string with commas, and it is a first try






function replaceSpaces(string, separator) {
    if (separator == "") {
        separator = "-"
    }
    var result = [];
    for (i = 0; i < string.length; i++) {
        if (string[i] == " ") {
            result += separator;
        } else {
            result += string[i];
        }
    } return result;
}

console.log(replaceSpaces("My random string", "_"));
console.log(replaceSpaces("My random string", "+"));
console.log(replaceSpaces("My random string", ""));

/*
======================================================================================
10. Write a function to get the first n characters and add “...”
at the end of newly created string.
======================================================================================
*/

function AddCharsOnEnd(string, numOfFirstChars) {
    var result = "";
    add = "...";
    for (i = 0; i < numOfFirstChars; i++) {
        result += string[i];
    } return result + add;
}

console.log(AddCharsOnEnd("Some random string", 10));






/*
======================================================================================
11. Write a function that converts an array of strings into an array of numbers.
Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
======================================================================================
*/

var arr = ["1", "21", undefined, "42", "1e+3", Infinity];

function convertArrayToString(array) {
    var result = [];

    for (i = 0; i < array.length; i++) {
        var int = parseInt(array[i]);
        var float = parseFloat(array[i]);

        if (int == float || isFinite(int)) {
            result += array[i];
        }
    } return result;
}

console.log(convertArrayToString(arr));     //121421e+3



/*
======================================================================================
12. Write a function to calculate how many years there are left until retirement based
on the year of birth. Retirement for men is at age of 65 and for women at age of 60.
If someone is already retired, a proper message should be displayed.
======================================================================================
*/

function yearsUntilRetirement(gender, birthyear) {
    var result = 0;
    if (gender == "male") {
        result = 65 - (2021 - birthyear);
    } else {
        result = 60 - (2021 - birthyear);
    } if (result < 0) {
        result = "This person has already retired"
    } return result;
}

console.log(yearsUntilRetirement("male", 1989));
console.log(yearsUntilRetirement("female", 1950));


/*
======================================================================================
13. Write a function to humanize a number (formats a number to a human-readable string)
with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
======================================================================================
*/


function humanizeNumber(num) {
    result = "";
    if (num == 11) {
        result = num + "th";
    } else if (num == 12) {
        result = num + "th";
    } else if (num == 13) {
        result = num + "th";
    } else if ((num % 10) == 1) {
        result = num + "st";
    } else if ((num % 10) == 2) {
        result = num + "nd";
    } else if ((num % 10) == 3) {
        result = num + "rd";
    } else if (num > 3) {
        result = num + "th";
    } else {
        result = "Please use positive numbers.";
    } return result;
}

console.log(humanizeNumber(101));



