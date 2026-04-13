// find max from an array
function getMax(nums) {
  let max = nums[0];

  for (const n of nums) {
    if (n > max) {
      max = n;
    }
  }

  return max;
}

const input = [2, 54, 96, 2, 1, 89];
const output = getMax(input);
console.log(output);

// hw: find min from and array
function getMin(nums) {
  let min = nums[0];

  for (const n of nums) {
    if (n < min) {
      min = n;
    }
  }

  return min;
}

const result = getMin(input);
console.log(result);
