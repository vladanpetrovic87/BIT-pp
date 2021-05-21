
//Uz pomoc konstruktorske klase kreiramo objekat
function Hero (n, o) {
    this.name = n;
    this.occupation = o;
}

var hero = new Hero('donatelo', 'ninja');

console.log(hero);




function factory(n) {
    var ob = {};
    ob.name = n;
    return ob;
}
    

function factory(n) {
    var ob = {
        name: n
    }
    return ob;
}

var obj = factory('one');


var a = [];
var b = a;

b[0] = 22;

console.log(a);
console.log(b);



var sum = function() {
    return 2 + 2;
};
var somethingElse = function() {
    return 2 + 2;
};

console.log(sum===somethingElse);


