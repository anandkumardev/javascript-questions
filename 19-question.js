// === Program to Check Armstrong Number === //

const prompt = require('prompt-sync')(); // required to use prompt

// A positive integer is called an Armstrong number (of order n) if abcd... = an + bn + cn + dn + ... 

/* In the case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself. 
For example, 153 is an Armstrong number because 153 = 1*1*1 + 5*5*5 + 3*3*3 */



// :::=>  program to check an Armstrong number of three digits

let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

// Enter a three-digit positive integer: 153, 153 is an Armstrong number.



// :::=>  Check Armstrong Number of n Digits

// program to check an Armstrong number of n digits

// take an input
const num = prompt("Enter a positive integer");
const numberOfDigits = num.length;
let total = 0;

// create a temporary variable
let tempValue = number;

while (tempValue > 0) {

    let remainderValue = tempValue % 10;

    total += remainderValue ** numberOfDigits;

    // removing last digit from the number
    tempValue = parseInt(tempValue / 10); // convert float into integer
}

if (total == num) {
    console.log(`${num} is an Armstrong number`);
}
else {
    console.log(`${num} is not an Armstrong number.`);
}

// Enter a positive integer: 92727 , 92727 is an Armstrong number