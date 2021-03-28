function getMinElementFromArray(array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

var x = [4, 2, 2, -1, 6];
var result = getMinElementFromArray(x);

console.log(result);



function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(10));



function isInArray(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}

var arr = [1, 2, 3];
var element = 2;
var result = isInArray(arr, element);

console.log(result);



function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(3, 4, 5));



// Funkcija arguments vraca sve dodeljene argumente
function args() {
    return arguments;
}

console.log(args(3, 4, 5));
