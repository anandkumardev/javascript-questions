// === Program to Find the Largest Among Three Numbers === //

const num1 = -7;
const num2 = -5;
const num3 = -1;
let largest;

// check the condition
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);




// :=> Using Math.max()
const prompt = require('prompt-sync')(); // required to use prompt

const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));
const number3 = parseFloat(prompt("Enter third number: "));

const largestNum = Math.max(number1, number2, number3);

// display the result
console.log("The largest number is " + largestNum);

/* Enter first number: 5 , Enter second number: 5.5 , Enter third number: 5.6   = The largest number is 5.6 */


// NOTE: Math.min() -to find the smallest among the numbers