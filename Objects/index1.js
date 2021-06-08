// var user = {
//     username: 'pera',
//     password: '123456',
//     email: 'pera@gmail.com',
//     age: 25,
//     isAdmin: false
// };

// var propertyName = 'email';

// console.log(user[propertyName]);
// console.log(typeof user);


// user.password = 'absde';

// user.address = {
//     street: 'Ulica 34',
//     city: 'Beograd'
// };
// console.log(user.address.city);



var x = 10;
var y = '10';

console.log(x === y); // false 


var user1 = {
    username: 'pera',
    password: '123'
};

var user2 = {
    username: 'pera',
    password: '123'
};

var user3 = user2;

console.log(user1 == user2); // false

console.log(user3 == user2); // true



// function change(x) {
//     x += 10;
//     console.log(x);
//     return x;
// }

// var x = 5;
// x = change(x);
// console.log(x);



// function change(obj) {
//     obj.x += 10;
//     console.log(obj.x);
// }

// var obj = {x:5};
// change(obj);
// console.log(obj);


function User(username, password) {
    // this = {}

    this.username = username;
    this.password = password;

    this.changePassword = function(newPassword) {
        this.password = newPassword;
    }

    // return this;
}

var user = new User('pera', '123');
console.log(user);
user.changePassword('abcd')
console.log(user);



console.log(global);
console.log(this);

var x = 10;
window.x = 10;

var x = 10;
global.x = 10;



var newUser = {
    username: 'pera',
    password: '1234',
    changePassword: function(newPassword){
        this.password = newPassword;
    }
};



var x = 6;
var y = 5;

var obj = {
    x: 5,
    y: 8,
    sum: function(){
        return this.x + this.y;
    }
};

console.log(obj.sum());



'use strict';
var obj = new Object();
// var obj = {};
Object.defineProperty(obj, 'x', {
    value: 1,
    writable: false,
    enumerable: true
});

Object.defineProperty(obj, 'y', {
    value: 5,
    writable: true,
    enumerable: true
});

obj.x = 10;

console.log(obj);


for(property in obj) {
    console.log(property, obj[property]);
}


Object.freeze(obj);


// 1.
var input = 'programing';
var otput;
otput = input[0].toUpperCase().concat(input.substr(1));

console.log(otput);

//2.
var input = 'programing in js';
var otput;
otput = input.substr(-2).toUpperCase();

console.log(otput);

//3. 
var input = 'programing in js';
var otput = input[0]
    .toUpperCase()
    .concat(input.slice(1, -2))
    .concat(input.substr(-2).toUpperCase());
console.log(otput);





