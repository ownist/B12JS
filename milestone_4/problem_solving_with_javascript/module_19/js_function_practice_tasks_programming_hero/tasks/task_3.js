function avg(arr) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }
  const avgValue = sum / arr.length;
  return avgValue;
}
const result = avg([2, 4, 56, 12]);
console.log(`Avg: ${result}`);
