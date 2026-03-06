let price = 25;
let competitorPrice = price;

price = 10;
competitorPrice = 15;

// console.log(price);
// console.log(competitorPrice);

// console.log("---------- break --------");

/**
 * now array ke copy korar time
 */
const productPrices = [52, 15, 48, 65];
const newArr = [];
// const competitorProductPrices = productPrices;

// ekta array er moddhe onno arekta array ke copy korar ekdom fokira system
for (const product of productPrices) {
  newArr.push(product);
}
// console.log(newArr);

// cng kori
// productPrices[1] = 28;
// competitorProductPrices[0] = 80;

// console.log(productPrices);
// console.log(competitorProductPrices);

// console.log("---------- break --------");

const competitorProductPrices = [].concat(productPrices);
competitorProductPrices[0] = 120;

// console.log(productPrices);
// console.log(competitorProductPrices);

/**
 * new numbers diye
 *
 * using Array.from() method
 */
const numbers = [1, 2, 3, 4];
const newNumbers = Array.from(numbers);
// changes
numbers[0] = 55;
newNumbers.push(100);

console.log(numbers);
console.log(newNumbers);

// most easy system. using spread operator
const myNewArr = [...numbers];
myNewArr[0] = 24;
myNewArr.push(48, 31);
console.log(myNewArr);
