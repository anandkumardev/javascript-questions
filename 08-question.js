// ==== Program to Generate a Random Number ==== //

// generating  a random number
const a = Math.random();
console.log(a);  // 0.5856407221615856

// :=> Get a Random Number between 1 and 10

// ::: Math.random() * (highestNumber - lowestNumber) + lowestNumber
// generating a random number
const b = Math.random() * (10-1) + 1
console.log(`Random value between 1 and 10 is ${b}`);   // Random value between 1 and 10 is 7.392579122270686



// :=> Integer Value between 1 and 10

// ::: Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber
// generating a random number
const c = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`Random value between 1 and 10 is ${c}`); // Random value between 1 and 10 is 2



// :=> Integer Value between Two Numbers (Inclusive)

// ::: Math.floor(Math.random() * (max - min + 1)) + min

// input from the user
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const x = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${x}`);
/* Enter a min value: 1
Enter a max value: 50
Random value between 1 and 50 is 47 */
