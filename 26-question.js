// === Program to Find HCF === //

const prompt = require('prompt-sync')(); // required to use prompt

// :::=>  using for Loop

let hcf;
// take input
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

/*  Enter a first integer: 60
    Enter a second integer: 72
    HCF of 60 and 72 is 12 
*/


// :::=>  using while Loop and if...else

// program to find the HCF or GCD of two integers

// take input
let num1 = prompt('Enter a first positive integer: ');
let num2 = prompt('Enter a second positive integer: ');

// looping until both numbers are equal
while(num1 != num2){
    if(num1 > num2) {
        num1 -= num2;
    }
    else {
        num2 -= num1;
    }
}

console.log(`HCF is ${num1}`);

/*  Enter a first integer: 60
    Enter a second integer: 72
    HCF is 12 
*/