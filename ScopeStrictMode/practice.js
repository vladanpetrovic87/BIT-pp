"use strict" // direktiva koja je strozija i ne dozvoljava da se ne deklarise i uvek se pise na pocetku fajla ili na pocetku funkcije

var a = 22;

console.log(a);




//block > statements > expression
//expession => fragment ili deo recenice
//statements => cela recenica
//block => pasus

//declaration statements
var nesto;

var sumResult;

function sum (a, b) {
    var result = a +b;
    return result;
}

//expression statements

nesto = 22;
sumResult = sum (3, 4);



if (23 > 12)
    console.log('vece je');


for(let index = 0; index < 10; index++) {
    console.log(index)
    if(index > 6) {
        continue;
    }
    console.log('hello')
    console.log('world')
}


var j = 0;
do {
    console.log(j)
    j++;
} while (j < 10)





var global = 123;

function myFunc() {
    console.log(global);
    var global = 1;
    console.log(global);
}

myFunc();



function testFunction () {
    console.log('iz funkcije');
}

var testFunction = function () {
    console.log('iz funkcije');
}

testFunction();
