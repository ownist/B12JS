const numbers = [1, 2, 3, 4, 5];
let reversedArray = [];

/**
 * for loop use kore array er protita element pacchi
 *
 * unshift use kore eikhne array protekta upadan ke first e boshacchi
 */
for (let i = 0; i < numbers.length; i++) {
  // reversedArray.unshift(numbers[i]);
}
// console.log(reversedArray);

/**
 * ekhn array take ekdom ultavabe lopp korbo and also push methode use korbo
 */
for (let i = numbers.length - 1; i >= 0; i--) {
  // reversedArray.push(numbers[i]);
}
// console.log(reversedArray);

/**
 * loop use kore array ke reverse korte chaile for of is the best choise and shortcut
 */
for (const number of numbers) {
  // reversedArray.unshift(number);
}
// console.log(reversedArray);

/**
 * reverse() methode use kore. eita rray er built in methode and eita aro shohoj and simple
 *
 * ei methode ta array takei change kore dei. mane in place sei full array er moddhei change kore fele. tobe chaile amra eitake ekta variable er mode rakhte pari. but amra change korle ager array take pabona.. in place cng kore dei
 *
 * ei method array take sei array er moddhei cng kore fele. mae eita main array take cng kore dei, ami r original array take pabo na
 */
console.log(numbers);
numbers.reverse();
console.log(numbers);
