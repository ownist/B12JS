function isEvenOrOdd(num) {
  if (num % 2 === 1) {
    return num * 2;
  } else {
    return num / 2;
  }
}
const result = isEvenOrOdd(20);
console.log(`result: ${result}`);
