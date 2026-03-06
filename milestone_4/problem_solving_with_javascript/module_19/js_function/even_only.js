/**
 * ekti array theke sudhu even songkhagulo return korte hobe
 */
function evenSonly(nums) {
  const evensNums = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evensNums.push(num);
    }
  }
  // return
  return evensNums;
}
const resultOfEvenNumsOnly = evenSonly([2, 6, 5, 95, 46, 15]);
console.log(resultOfEvenNumsOnly);

/**
 * ekta array theke sudhu matro even numbergulor jogfol ber korte hobe
 */
function sumOfEvenNums(nums) {
  let sum = 0;

  for (const num of nums) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  // return
  return sum;
}
const result = sumOfEvenNums([3, 26, 1, 51, 94, 62, 15]);
console.log(`sum of even numbers are: ${result}`);
