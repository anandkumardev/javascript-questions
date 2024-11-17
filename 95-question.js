// === Program to Remove All Whitespaces From a Text === //

// :::=> Using split() and join()

const string = '      Hello World       ';

const result = string.split(' ').join('');

console.log(result); 

// output: HelloWorld


// :::=> Using Regular Expression

function trimString(x) {

    const result = x.replace(/\s/g,'');
    return result;
}

const result1 = trimString('    Hello World    ');
console.log(result1);

// output: HelloWorld