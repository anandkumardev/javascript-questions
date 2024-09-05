// ==== Program to Print the Fibonacci Sequence ==== //

// :=> generate fibonacci series up to n terms

// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

/* Enter the number of terms: 4
Fibonacci Series:
0
1
1
2 */



// :=> Fibonacci Sequence Up to a Certain Number

// program to generate fibonacci series up to a certain number

const num = 5;
let num1 = 0, num2 = 1, nextTermValue;

console.log('Fibonacci Series:');
console.log(num1); // print 0
console.log(num2); // print 1

nextTermValue = num1 + num2;

while (nextTermValue <= num) {

    // print the next term
    console.log(nextTermValue);

    num1 = num2;
    num2 = nextTerm;
    nextTermValue = num1 + num2;
}

/* Fibonacci Series:
0
1
1
2
3
5 */