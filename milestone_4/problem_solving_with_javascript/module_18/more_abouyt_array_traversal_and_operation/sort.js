const numbers = [6, 1, 8, 2, 3, 5];
console.log(numbers);
numbers.sort();
console.log(numbers);

/** jodi string ke sort() kori tahole eita alphabetically sort kore */
const friends = ["sabbir", "siam", "zayan", "hayat", "niloy", "bappi"];
console.log(friends);
friends.sort();
console.log(friends);

console.log("------- break ----------");

/**
 * sort()
 */
const ages = [1, 52, 65, 100, 178, 25, 78];
// console.log(ages);
// ages.sort();
// console.log(ages);

/**
 * sojavabe korte geel eivabe likhte hobe
 *
 * jhanker kaka koiche eida ekhn ektu konataw bujhar drkr nai...
 */
const sortedAgesAsc = ages.sort(function (a, b) {
  // ascending
  return a - b;
});
console.log(sortedAgesAsc);

const sortedAgesDesc = ages.sort(function (a, b) {
  // descending
  return b - a;
});
console.log(sortedAgesDesc);
