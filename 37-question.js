// === Program to Replace Characters of a String === //

const string = 'Mr Red has a red house and a red car';

// replace the characters
const newText = string.replace('red', 'blue');

// display the result
console.log(newText);   // Mr Red has a blue house and a red car



// :::=>  Replace Character of a String Using RegEx

const str = 'Mr Red has a red house and a red car';

// regex expression
const regex = /red/g;

// replace the characters
const newTxt = string.replace(regex, 'blue');

// display the result
console.log(newTxt); // Mr Red has a blue house and a blue car