const age = 17;

/**
 * condition ? do something when true : do something when flase
 */

/*
if (age >= 18) {
  console.log("you can vote.");
} else {
  console.log("jaw baccha.. ghumai thako");
}
*/

// simple ternary
// age >= 18 ? console.log("vote dio") : console.log("jaw ghumaw");

let price = 1000;
const isLeader = true;

/*
if (isLeader) {
  price = 0;
} else {
  price = price + 100;
}
*/
// console.log(price);

// price = isLeader ? 0 : price + 100;
// console.log(price);

// fell free to ignore this one
price = isLeader ? (price >= 1000 ? price / 2 : 0) : price + 1000;
console.log(price);
