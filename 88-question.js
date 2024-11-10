// === Program to Pass Parameter to a setTimeout() Function === //

// :::=> Passing Parameter to setTimeout() Function

function greet() {
    console.log('Hello world');
}

// passing parameter
setTimeout(greet, 3000);
console.log('This message is shown first');

/* This message is shown first
   Hello world
*/


// :::=> Passing Parameter to Function

function greetFnc(x, y) {
    console.log(x);
    console.log(y);
}

// passing parameter
setTimeout(greetFnc, 3000, 'hello', 'world');
console.log('This message is shown first');

/* This message is shown first
   hello
   world
*/