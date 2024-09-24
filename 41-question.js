// === Program to Convert the First Letter of a String into UpperCase === //

const prompt = require('prompt-sync')(); // required to use prompt

function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

// take input
const string = prompt('Enter a string: ');

const result = capitalizeFirstLetter(string);

console.log(result);

/* Enter a string: javaScript
   JavaScript 
*/



// :::=> Using a Regex

function capitalizeFirstLetter1(str) {

    // converting first letter to uppercase
    const capitalized = str.replace(/^./, str[0].toUpperCase());

    return capitalized;
}

// take input
const string1 = prompt('Enter a string: ');

const result1 = capitalizeFirstLetter1(string1);

console.log(result1);

/* Enter a string: javaScript
   JavaScript
*/