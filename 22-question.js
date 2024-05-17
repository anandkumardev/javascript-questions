// === Program to Find the Sum of Natural Numbers === //

const prompt = require('prompt-sync')(); // required to use prompt

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);


/* Enter a positive integer: 100
   The sum of natural numbers: 5050 */



// :::=> program to display the sum of natural numbers

// take input from the user
const num = parseInt(prompt('Enter a positive integer: '));

let total = 0, i = 1;

// looping from i = 1 to number
while(i <= num) {
    total += i;
    i++;
}

console.log('The sum of natural numbers:', total);

/* Enter a positive integer: 100
   The sum of natural numbers: 5050 */