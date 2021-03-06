var godine = 46;
var boja = 'zelena';
boja = 'plava';

var mojeGodine = godine - 10;

console.log(mojeGodine);

var numberOfLikes = 23;
var newNumberOfLikes = numberOfLikes + 12;
console.log(newNumberOfLikes);

var pi = 3.14;

var visina;
console.log(visina);

var ostatak = 31 % 2
console.log(ostatak)

var a = 2;

a++; // a = a + 1;
a--;

a += 4; // a = a + 4;

a *= 3;

a -= 2;

console.log(a);


if (numberOfLikes === 23){
    console.log(numberOfLikes);
    console.log(numberOfLikes);
    console.log(numberOfLikes);
}

var a = true;

var b = true;

var c = a && b;

//true && true = true
//false && true = false
//true && false = false
//false && false = false

//true || true = true
//false || true = true
//true || false = true
//false || false = false

var isLoggedIn = true;

var c = isLoggedIn && 'ulogovan je';

var d = isLoggedIn || 'neka vrednost'

console.log(c)
console.log(d)

var a = 3;

var c = 4;

var result = a < c;

console.log(result)

var nekiBroj = false === "";

console.log(nekiBroj);


//&& - i
//|| - ili

var result = '';

result ? console.log(result) : console.log('result je falsy')

var isLoggedIn = 1;

var status = isLoggedIn ? 'ulogovan je' : 'nije ulogovan'

console.log(isLoggedIn)

//blocks > statements > expressions