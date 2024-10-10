// === Program to Replace All Line Breaks with <br></br> === //

// :::=> Using RegEx

const string = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.replace(/(\r\n|\r|\n)/g, '<br>');

console.log(result); // output: I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.


// :::=> Using split() and join()

const str = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result1 = str.split('\n').join('<br>');

console.log(result1); // output: I am Learning JavaScript.<br>JavaScript is fun.<br>JavaScript is easy.
