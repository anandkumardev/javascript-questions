// === Check the Number of Occurrences of a Character in the String === //

const prompt = require('prompt-sync')(); // required to use prompt

// :::=> Using for Loop

function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);

/* Enter a string: school
   Enter a letter to check: o
   2
*/



// :::=> Using a Regex

function countString1(str, letter) {

    // creating regex 
    const re = new RegExp(letter, 'g');

    // matching the pattern
    const count = str.match(re).length;

    return count;
}

// take input from the user
const string1 = prompt('Enter a string: ');
const letterToCheck1 = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result1 = countString1(string, letterToCheck);

// displaying the result
console.log(result1);

/* Enter a string: college
   Enter a letter to check: l
   2
*/