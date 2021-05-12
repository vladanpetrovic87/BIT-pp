// Write a program that prints the elements of the following array.

var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];

var result = '';

for(var i = 0; i < a.lenght; i++) {
    for(var j = 0; j < a[i].lenght; j++) {
        result += a[i][j] + '\t';
    }
    result += '\n';
}

console.log(result);

// 1: i = 0, 0 < 3(true), 
    // 1: j = 0; 0 < a[i](4)(true), result = result + a[i][j](a[0][0] = 1) + \tab, j++(1)
    // 2: j = 1; 1 < a[i](4)(true), result = result + a[i][j](a[0][1] = 2) + \tab, j++(2)
    // 3: j = 2; 2 < a[i](4)(true), result = result + a[i][j](a[0][1] = 3) + \tab, j++(3)
    // 4: j = 3; 3 < a[i](4)(true), result = result + a[i][j](a[0][1] = 24) + \tab, j++(4)
    // 5: j = 4; 4 < a[i](4)(false),end;
// => result = result + \new line, i++(1)
// 2: i = 1, 1 < 3(true) =>
    // 1: j = 0; 0 < a[i](4)(true), result = result + a[i][j](a[0][0] = 8) + \tab, j++(1)
    // 2: j = 1; 1 < a[i](4)(true), result = result + a[i][j](a[0][1] = 11) + \tab, j++(2)
    // 3: j = 2; 2 < a[i](4)(true), result = result + a[i][j](a[0][1] = 9) + \tab, j++(3)
    // 4: j = 3; 3 < a[i](4)(true), result = result + a[i][j](a[0][1] = 4) + \tab, j++(4)
    // 5: j = 4; 4 < a[i](4)(false),end;
// => result = result + \new line, i++(2)
// 3: 




for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        console.log('brojac unutrasnje petlje je (j): ' + j);
    }
    console.log('brojac spoljasnje petlje je (i): ' + i);
}


