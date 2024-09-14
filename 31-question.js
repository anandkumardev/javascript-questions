// === Program to Display Fibonacci Sequence Using Recursion === //

const prompt = require('prompt-sync')(); // required to use prompt


function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

// take nth term input from the user
const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}


/* Enter the number of terms: 5
    0
    1
    2
    3
    1
*/