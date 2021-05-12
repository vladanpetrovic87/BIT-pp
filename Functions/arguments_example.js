function sumOfTwoNums (a, b) {
    var result = a + b;
    return result;
}

function sumOfAllNums () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

var sum = sumOfTwoNums(1, 103, 5, 6);

var sumAll = sumOfAllNums(1, 103, 5, 6, 110, 220);

console.log(sumAll);