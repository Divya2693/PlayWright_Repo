"use strict";
function getNthFibonacci(n) {
    let a = 0, b = 1, temp;
    if (n <= 1) {
        console.log(`the result is ${n}`);
    }
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    console.log(`the result is ${b}`);
}
getNthFibonacci(8);
getNthFibonacci(0);
