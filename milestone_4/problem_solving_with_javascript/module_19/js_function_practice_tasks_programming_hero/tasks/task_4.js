function countZero(str) {
  let zero = [];

  for (const num of str) {
    if (num === "0") {
      zero.push(num);
    }
  }
  return zero.length;
}
const result = countZero("10100100011100101");
console.log(`total 0 is: ${result}`);
