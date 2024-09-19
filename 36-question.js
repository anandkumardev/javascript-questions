// === Program to Sort Words in Alphabetical Order === //

const prompt = require('prompt-sync')(); // required to use prompt

// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
    console.log(element);
}


/* Enter a sentence: I am learning JavaScript
   The sorted words are:
   I
   JavaScript
   am
   learning  
*/


/* Here, we are sorting alphabetically. So, the expected output is am, I, JavaScript, and learning. However, am is printed after I and JavaScript. */


/* Why I and JavaScript are printed before am?

This is because I and J of JavaScript are in uppercase. And, when we use the sort() method, uppercase letters are placed before lowercase. We can verify this by providing only lowercase input. */

/* Enter a sentence: i am learning javascript
   The sorted words are:
   am
   i
   javascript
   learning 
*/