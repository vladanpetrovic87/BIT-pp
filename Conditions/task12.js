// Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400

var num = 101;
var result = '';

if(num < 20) {
    result = '-';
}
else if (num >= 20 && num <= 100) {
    result = '20 <=> 100';
}
else if (num > 100 && num < 400) {
    result = '101 <=> 400';
}


console.log(result);
