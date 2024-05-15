// === Program to Display the Multiplication Table === //

const prompt = require('prompt-sync')(); // required to use prompt

// :=> Multiplication Table Up to 10

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}

/* Enter an integer: 3
   3 * 1 = 3
   3 * 2 = 6
   3 * 3 = 9
   3 * 4 = 12
   3 * 5 = 15
   3 * 6 = 18
   3 * 7 = 21
   3 * 8 = 24
   3 * 9 = 27
   3 * 10 = 30         
*/


// :=> Multiplication Table Up to a Range

// take number input from the user
const num = parseInt(prompt('Enter an integer: '));

// take range input from the user
const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const outcome = i * num;
    console.log(`${num} * ${i} = ${outcome}`);
}

/* Enter a range: 5
   7 * 1 = 7
   7 * 2 = 14
   7 * 3 = 21
   7 * 4 = 28
   7 * 5 = 35 
*/
