/**
 * Duplicate remove করো
 *
 * ```js
 * const numbers = [1,2,3,2,4,5,1,6];
 * ```
 *
 * Task: duplicate remove করে নতুন array বানাও।
 *
 * Expected: [1,2,3,4,5,6]
 */

const numbers = [1, 2, 3, 2, 4, 5, 1, 6];
const uniqueNumbers = [];

for (const num of numbers) {
  if (!uniqueNumbers.includes(num)) {
    uniqueNumbers.push(num);
  }
}

console.log(uniqueNumbers);
