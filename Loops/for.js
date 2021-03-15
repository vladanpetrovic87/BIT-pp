var punishment = '';

for(var i = 0; i < 100; i++) {
    punishment += 'I will never do this again\n';
}

console.log(punishment);



var num = 0;

for(var i = 0; i < 100; i++) {
    num += 1;
    console.log(num);
}



var sum = 0;

for(var i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

// 1: i = 1, 1 <= 100(true), sum = sum + i(sum = 0 + 1), sum = 1, i++(2)
// 2: i = 2, 2 <= 100(true), sum = sum + i(sum = 1 + 2), sum = 3, i++(3)
// 3: i = 3, 2 <= 100(true), sum = sum + i(sum = 3 + 3), sum = 6, i++(4)
// 4: i = 4, 2 <= 100(true), sum = sum + i(sum = 6 + 4), sum = 10, i++(5)
//...
// 100: i = 100, 100 <= 100(true), sum = sum + i(sum = 4950 + 100), sum = 5050, i++(101)
// 101: i = 101, 101 <= 100(false), end


var sum = 0;

for (var i = 1; i <= 100; i++) {
    if(sum === 0) {
        console.log('Current sum is: ' + sum);
    }
    sum = sum + i;

    if(sum > 30) {
        break;
    }

    console.log('Adding ' + i + '.Current sum is: ' + sum);
}


