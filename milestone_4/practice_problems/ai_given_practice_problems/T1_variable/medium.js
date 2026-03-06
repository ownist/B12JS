/**
 * using array distructuring method
 */
let a = 10;
let b = 20;

console.log(`swap er age: a = ${a}, b = ${b}`);

[a, b] = [b, a];
console.log(`swap er pore: a = ${a}, b = ${b}`);

// break use kora hoise jate kore buja jai duita alada jinis
console.log("---------- brak --------");

/**
 * using arithmetic operations
 */
let x = 5;
let y = 15;

// swap korar age
console.log(`swap korar age: x = ${x}, y = ${y}`);

x = x + y; // x er value 20 (5 + 15)
y = x - y; // y er value 5 (20 - 15), jeita x er prokrito value
x = x - y; // ekhn x er value 15 (20 - 5), jeita y er prokrito value

console.log(`swap korar pore: x = ${x}, y = ${y}`);
