// === Program to Find Armstrong Number in an Interval === //

const prompt = require('prompt-sync')(); // required to use prompt

// take an input
const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
const highNumber = parseInt(prompt('Enter a positive high integer value: '));

console.log ('Armstrong Numbers:');

// looping through lowNumber to highNumber
for (let i = lowNumber; i <= highNumber; i++) {

    // converting number to string 
    let numberOfDigits = i.toString().length;

    let sum = 0;

    // create a temporary variable
    let temp = i;

    /* loop through a number to find if 
    a number is an Armstrong number */
    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    } 

    if (sum == i) {
        console.log(i);
    }
}


/*  Enter a positive low integer value: 8
    Enter a positive high integer value: 500
    Armstrong Numbers: 
    8
    9
    153
    70
    371
    407
*/