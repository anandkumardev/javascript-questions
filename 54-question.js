// === Program to Check Whether a String Contains a Substring === //

const prompt = require('prompt-sync')(); // required to use prompt


// :::=> Check String with includes()

// take input
const string = prompt('Enter a string:');
const checkString = prompt('Enter a string that you want to check:');

// check if string contains a substring
if(string.includes(checkString)) {
    console.log(`The string contains ${checkString}`);
} else {
    console.log(`The string does not contain ${checkString}`);
}

/*  Enter a string: JavaScript is fun
    Enter a string that you want to check: fun
    The string contains fun
*/


// :::=> Check String with indexOf()

// take input
const str = prompt('Enter a string:');
const checkStr = prompt('Enter a string that you want to check:');

// check if string contains a substring
if(str.indexOf(checkStr) !== -1) {
    console.log(`The string contains ${checkStr}`);
} else {
    console.log(`The string does not contain ${checkStr}`);
}

/*  Enter a string: JavaScript is fun
    Enter a string that you want to check: fun
    The string contains fun
*/
