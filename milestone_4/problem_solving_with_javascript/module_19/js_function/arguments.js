/**
 * double korar funtion
 */
function doubled(num) {
  const result = num * 2;
  console.log(`${num} er double value holo: ${result}`);

  // break line
  console.log("----------------------------");
}
// call doubled function
doubled(5);
doubled(55);
doubled(2);
doubled(45);

/**
 * 1. function ke jokhon call kora hoi tokhon sobsomoi argument hisebe hard coded kono value pass na kore ami ekta variable kew argument hisebe pass korte pari
 */
const number = 20;
doubled(number);

const money = 230;
doubled(money);

/**
 * difference
 */
function diff(n1, n2) {
  const result = n1 - n2;
  console.log(`diff ${n1} - ${n2} = ${result}`);
}

// using variable
const fatherAge = 48;
const myAge = 17;
// call diff funtion
diff(fatherAge, myAge);
