"use strict";
//To calculate the factorial of a number in JavaScript using a for loop,
//  you multiply all positive integers from 1 up to that number.
function factorial(num) {
    // Factorial of negative numbers is not defined
    if (num < 0) {
        console.log(`Error : factorial is not computed for negative numbers`);
    }
    // Factorial of 0 and 1 is always 1
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i; // result = result * i
    }
    console.log(`The result is ${result}`);
}
factorial(5);
factorial(-5);
factorial(1);
