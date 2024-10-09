// === Program to Replace all Instances of a Character in a String === //

// :::> Using Regex

const string = 'Learning JavaScript Program';

const result = string.replace(/a/g, "A");

console.log(result); // output: LeArning JAvAScript ProgrAm



// :::> Using split() and join()

const str = 'Learning JavaScript Program';

const splitString = string.split('a');

const result1 = splitString.join('A');

console.log(result1); // output: LeArning JAvAScript ProgrAm