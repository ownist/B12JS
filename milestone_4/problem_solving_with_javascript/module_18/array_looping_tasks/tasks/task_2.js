const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenArr = [];

for (const num of numbers) {
  if (num % 2 === 0) {
    evenArr.push(num);
  }
}
console.log(evenArr);
