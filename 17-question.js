// ===  Program to Find the Factorial of a Number === //

const prompt = require('prompt-sync')(); // required to use prompt

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '), 10);

// checking if the input is a valid number
if (isNaN(number)) {
    console.log('Error! Please enter a valid number.');
}

// checking if number is negative
else if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}


/* Enter a positive integer: 5
The factorial of 5 is 120. */