// === Program to Replace All Occurrences of a String === //

const string = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/gi;

// replace the characters
const newText = string.replace(regex, 'blue');

// display the result
console.log(newText);     

// output: Mr blue has a blue house and a blue car





// :::=> built-in Method

const str = 'Mr red has a red house and a red car';

const result = str.split('red').join('blue');

console.log(result);

// output: Mr blue has a blue house and a blue car