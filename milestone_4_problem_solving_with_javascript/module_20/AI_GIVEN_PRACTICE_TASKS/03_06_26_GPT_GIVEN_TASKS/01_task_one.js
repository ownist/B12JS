/**
 * Array থেকে Even Number বের করো
 *
 * একটা array আছে:
 * ```js
 * const numbers = [3, 7, 10, 15, 20, 22, 31];
 * ```
 *
 * Task:
 * filter() ব্যবহার করে শুধু even number বের করো।
 *
 * Expected:
 * ```md
 * [10, 20, 22] // output
 * ```
 */

const numbers = [3, 7, 10, 15, 20, 22, 31];
const evenNum = numbers.filter((num) => num % 2 === 0);
console.log(evenNum);
