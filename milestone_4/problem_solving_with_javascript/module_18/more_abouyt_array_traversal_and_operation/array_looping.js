const fruits = ["Apple", "Banana", "Anar", "Watermelon", "Daav"];

for (let i = 0; i < fruits.length; i++) {
  // console.log(fruits[i]);
}

/**
 * using diff numbers
 */
const numbers = [254, 15, 48, 652, 487];
for (let x = 0; x < numbers.length; x++) {
  // console.log(numbers[x]);
}

/**
 * using while loop
 */
let j = 0;
while (j < fruits.length) {
  // console.log(fruits[j]);
  j++;
}

// console.log("---------- break ---------"); // eita use korlam cz duita alada jinis bujhanor jonno

/** now using best practice
 *
 * using for of loop
 */
for (const fruit of fruits) {
  // console.log(fruit);
}

/**
 * another loop using while
 */
const prices = [40, 100, 50, 40];
let n = 0;
let sum = 0;

while (n < prices.length) {
  let price = prices[n];
  sum += price;
  n++;
}
console.log(sum);
