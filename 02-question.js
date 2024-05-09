// === Add Two Numbers Entered by the User === //

const prompt = require('prompt-sync')();
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

// Enter the first number 5
// Enter the second number 3
// The sum of 5 and 3 is: 8