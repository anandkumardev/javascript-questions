// === Program to Calculate Area of a Circle === //

// ::: Area of Circle = π(r^2) 

function calculateArea(radius) {
    if (radius < 0) {
        return `Error: Radius ${radius} is invalid. Radius cannot be negative.`;       
    }

    const pi = Math.PI;
    const area = pi * Math.pow(radius, 2);  // Also, do [ pi * radius * radius ]
    return area;
}

console.log(calculateArea(5)); // Output: 78.53981633974483
console.log(calculateArea(0)); // Output: 0
console.log(calculateArea(-3)); // Output: Radius cannot be negative