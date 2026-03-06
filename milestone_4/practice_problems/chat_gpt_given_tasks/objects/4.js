const numbers = {
  a: 10,
  b: 20,
  c: 30,
};
let sum = 0;

for (const num in numbers) {
  sum += numbers[num];
}
console.log(`total sum of numbers are: ${sum}`);
