// === program to find the ASCII value of a character === //

const prompt = require('prompt-sync')(); // required to use prompt

// take input from the user
const string = prompt('Enter a character: ');

// convert into ASCII value
const result = string.charCodeAt(0);

console.log(`The ASCII value is: ${result}`);

/* Enter a character: a
The ASCII value is: 97
*/


// :::=> Find ASCII Value of Character Using codePointAt()

// take input from the user
const str = prompt('Enter a character: ');

// convert into ASCII value
const outcome = str.codePointAt(0);

console.log(`The ASCII value is: ${outcome}`);

/* Enter a character: abc
The ASCII value is: 97
*/