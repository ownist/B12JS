function willSuccess(marks) {
  // edge case
  if (!Array.isArray(marks)) return "Invalid";

  let passCount = 0;
  let failCount = 0;

  for (const n of marks) {
    if (n >= 50) {
      passCount++;
    } else {
      failCount++;
    }
  }

  return passCount > failCount;
}

const input = [55, 75, 41, 33, 0, 87, 91, 30];
const output = willSuccess(input);
console.log(output);
