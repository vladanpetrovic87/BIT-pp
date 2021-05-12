(
    function () {
        console.log('boo');
    }
)();



(
    function (mood) {
        console.log('Felling ' + mood + '!');
    }
)('crazy');



var isLogedIn = true;
var result = (function () {
    return isLogedIn ? "User is autoized" : "User is not autoized"
    // return 'something';
}) ();

console.log(result);

// console.log('After invoke: ', result());


