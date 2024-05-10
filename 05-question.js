// === Program to Swap Two Variables === //

// :=> By Using Destructuring Assignment Method
let a = 5;
let b = 500;

[a, b] = [b, a];

console.log(`The value of a after swapping: ${a}`);  // The value of a after swapping: 500
console.log(`The value of b after swapping: ${b}`);  // The value of b after swapping: 5



// :=> By Using a Temporary Variable
let x = 34;
let y = 59;

//create a temporary variable
let temp;

//swap variables
temp = x;
x = y;
y = temp;

console.log(`The value of x after swapping: ${x}`);  // The value of x after swapping: 59
console.log(`The value of y after swapping: ${y}`);  // The value of y after swapping: 34


// :=> By Using Arithmetic Operators
let p = 12;
let q = 78;

// addition and subtraction operator
p = p + q;
q = p - q;
p = p - q;

console.log(`The value of p after swapping: ${p}`);  // The value of p after swapping: 78
console.log(`The value of q after swapping: ${q}`);  // The value of q after swapping: 12