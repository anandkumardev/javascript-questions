// === Check if the Numbers Have Same Last Digit === //

const prompt = require('prompt-sync')();

// take input
const a = prompt('Enter a first integer: ');
const b = prompt('Enter a second integer: ');
const c = prompt('Enter a third integer: ');

// find the last digit
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;

// compare the last digits
if(result1 == result2 && result1 == result3) {
    console.log(`${a}, ${b} and ${c} have the same last digit.`);
}
else {
    console.log(`${a}, ${b} and ${c} have different last digit.`);
}

/* Enter a first integer: 8
   Enter a second integer: 38
   Enter a third integer: 88
   8, 38 and 88 have the same last digit. */



