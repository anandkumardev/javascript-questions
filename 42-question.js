// === Program to Count the Number of Vowels in a String === //


const prompt = require('prompt-sync')(); // required to use prompt

// :::=> Using Regex

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);

/* Enter a string: JavaScript program
   5
*/


// :::=> Using for Loop

// defining vowels
const vowels = ["a", "e", "i", "o", "u"]

function countVowelFnc(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string1 = prompt('Enter a string: ');

const result1 = countVowelFnc(string);

console.log(result);

/* Enter a string: JavaScript program
   5
*/
