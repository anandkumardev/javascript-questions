// === Program to Trim a String === //

const string = '      Hello World       ';

const result = string.trim(); // removes the leading and trailing white spaces

console.log(result);

// Output: Hello World  


// :::=> Using Regular Expression

function trimString(x) {
    let trimValue = x.replace(/^\s+|\s+$/g,'');
    return trimValue;
}

const res = trimString('    Hello world    ');
console.log(res);

// Output: Hello world