// === Program to check if the string is palindrome or not === //

const prompt = require('prompt-sync')(); // required to use prompt

// :::=>  Check Palindrome Using for Loop

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);

/* Enter a string: tenet
   It is a palindrome   */



// :::=> Check Palindrome using built-in Functions

function knowPalindrome(str) {

    // convert string to an array
    const arrayValues = str.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(str == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
const str = prompt('Enter a string: ');

knowPalindrome(str);

/* Enter a string: anand
   It is not a palindrome  */