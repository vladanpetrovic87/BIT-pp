// Write a conditional statement to
// find the largest of five
// numbers. Display the result in
// console.

// Sample numbers: -5, -2, -6, 0, -1

// Output: 0

var n = 11;
var m = 15;
var o = 17;
var p = -5;
var s = 0;

var max = n;

if(m > max) {
    max = m;
}
if(o > max) {
    max = o;
}
if(p > max) {
    max = p;
}
if(s > max) {
    max = s;
}

console.log(max);


// Drugi nacin:

// if ( n > m && n > o && n > p && n > s) {
//     console.log(n);
// }
// else if (m > o && m > p && m > s) {
//     console.log(m);
// }
// else if (o > p && o > s) {
//     console.log(o);
// }
// else if (p > s) {
//     console.log(p);
// }
// else {
//     console.log(s);
// }


