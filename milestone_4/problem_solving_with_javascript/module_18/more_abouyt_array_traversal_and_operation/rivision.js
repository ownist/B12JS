const price = 500; /** number type */
console.log(price);

const name = "Shahed"; /** string type */
const isPoor = true; /** boolean type */

const friends = ["Elon", "Mark", "Bill", "Jeff"]; /** array */

const student = {
  class: 11,
  name: "Shahed",
  age: 17,
  address: "Dhaka - Bangladesh",
};

/**
 * condition
 */
if (price > 1000) {
  console.log("Too expensive, not for me");
} else {
  console.log("witin my baget");
}

/** loop */
let pushUp = 1;
while (pushUp <= 10) {
  console.log(`${pushUp}. push up`);
  pushUp++;
}

/**
 * for loop
 */
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
