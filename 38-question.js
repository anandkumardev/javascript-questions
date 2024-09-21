// === program to reverse a string === //

const prompt = require('prompt-sync')(); // required to use prompt

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);


/* Enter a string: Hello World
   dlroW olleH  
*/


// :::=> Reverse a String Using built-in Methods

function reverseStr(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}
 
// take input from the user
const enterString = prompt('Enter a string: ');

const outcome = reverseStr(enterString);
console.log(outcome);

/* Enter a string: hello
   olleh
*/