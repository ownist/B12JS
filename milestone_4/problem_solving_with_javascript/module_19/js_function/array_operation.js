/**
 * ekta array theke sobgulo upadan jog kore jei jogfol ta return korte hobe
 */

function sumOfArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
const result = sumOfArray([3, 6, 5, 6, 9]);
console.log(`total sum of numbers are: ${result}`);
