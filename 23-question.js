// === Program to Find the Factors of a Number === //

const prompt = require('prompt-sync')();

// take input
const num = prompt('Enter a positive number: ');

console.log(`The factors of ${num} is:`);

// looping through 1 to num
for(let i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
      console.log(i);
    }
};

/* Enter a positive number: 12
   The factors of 12 is:
   1
   2
   3
   4
   6
  12
*/

