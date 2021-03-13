var count = 0;

// while (count < 10) {
//     console.log(count);
//     count = count + 1;   
// }

// 1: count = 0 => 0 < 10 (true) => log(0) => count = count + 1 => count = 1;
// 2: count = 1 => 1 < 10 (true) => log(1) => count = count + 1 => count = 2;
// 3: count = 2 => 2 < 10 (true) => log(2) => count = count + 1 => count = 3;
// 4: count = 3 => 3 < 10 (true) => log(3) => count = count + 1 => count = 4;
// 5: count = 4 => 4 < 10 (true) => log(4) => count = count + 1 => count = 5;
// 6: count = 5 => 5 < 10 (true) => log(5) => count = count + 1 => count = 6;
// 7: count = 6 => 6 < 10 (true) => log(6) => count = count + 1 => count = 7;
// 8: count = 7 => 7 < 10 (true) => log(7) => count = count + 1 => count = 8;
// 9: count = 8 => 8 < 10 (true) => log(8) => count = count + 1 => count = 9;
// 10: count = 9 => 9 < 10 (true) => log(9) => count = count + 1 => count = 10;
// 11: count = 10 => 10 < 10 (false) => end;


while (true) {
    if (count === 10) {
        break;
    }
    count = count + 1;
    console.log(count);
}