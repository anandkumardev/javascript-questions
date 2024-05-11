// ==== Program to Calculate the Area of a Triangle ==== //

// "Formula" ::: area = (base * height) / 2 

const baseValue = 4;
const heightValue = 6;

// calculate the area
const area = (baseValue * heightValue) / 2;

console.log(`The area of the triangle is ${area}`); // The area of the triangle is 12



// :=> Area When All Sides are Known

/* ::: Heron's Formula  
    ~ s = (a+b+c)/2
    ~ area = √(s(s-a)*(s-b)*(s-c))
*/

// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(`The area of the triangle is ${areaValue}`);