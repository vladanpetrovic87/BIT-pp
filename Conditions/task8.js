// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F

var c = 60;
var f;

if(typeof f === 'undefined') {
    f = (9 * c / 5) + 32;
}
else {
    c = (f-32) / 1.8;
}

console.log(f);

