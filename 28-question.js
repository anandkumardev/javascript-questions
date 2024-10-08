// === Program to Guess a Random Number === //

const prompt = require('prompt-sync')(); // required to use prompt

// program where the user has to guess a number generated by a program

function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    // take the input until the guess is correct
    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 10: '));
    }

    // check if the guess is correct
    if(number == random) {
        console.log('You guessed the correct number.');
    }

};

// call the function
guessNumber();


/* Guess a number from 1 to 10: 1
   Guess a number from 1 to 10: 8
   Guess a number from 1 to 10: 5
   Guess a number from 1 to 10: 4
   You guessed the correct number
*/