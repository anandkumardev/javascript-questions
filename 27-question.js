// === Program to Find LCM === //

const prompt = require('prompt-sync')(); // required to use prompt

// :::=>  using while Loop and if Statement

// take input
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');

// higher number among number1 and number2 is stored in min
let min = (num1 > num2) ? num1 : num2;

// while loop
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}


/*  Enter a first positive integer: 6
    Enter a second positive integer: 8
    The LCM of 6 and 8 is 24 */



// :::=>  LCM Calculation Using HCF

let hcf;
// take input
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2 to find HCF
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// find LCM
let lcm = (number1 * number2) / hcf;

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${lcm}.`);

/* Enter a first positive integer: 6
   Enter a second positive integer: 8
   The LCM of 6 and 8 is 24. */