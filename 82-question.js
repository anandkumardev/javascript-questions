// === Program to Set a Default Parameter Value For a Function === //

function sum(x = 3, y = 5) {

    // return sum
    return x + y;
}

console.log(sum(5, 15)); // 20
console.log(sum(7)); // 12
console.log(sum()); // 8

// :::=> Using Previous Parameter in Another Parameter

let calculate = function(x = 15, y = x + 2) {
    return x + y;
}

const result1 = calculate(10);
console.log(result1); // 22

const result2 = calculate();
console.log(result2); // 32