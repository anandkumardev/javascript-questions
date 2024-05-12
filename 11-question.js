// === Program to Check if a Number is Odd or Even === //

// :=> Using if...else

// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

/* Enter a number: 27
The number is odd. */



// :=> Using Ternary Operator

// take input from the user
const num = prompt("Enter a number: ");

// ternary operator
const result = (num % 2  == 0) ? "even" : "odd";

// display the result
console.log(`The number is ${result}.`);


/* Enter a number: 5
The number is odd. */