function OddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
const result = OddEven(57);
console.log(`The number is: ${result}`);
