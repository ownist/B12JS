const numbers = [1, 2, 2, 3, 4, 4, 5];
const result = [];

for (const num of numbers) {
  if (!result.includes(num)) {
    result.push(num);
  }
}
// print
console.log(result);
