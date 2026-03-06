/**
 * Array এর সব name uppercase করো
 *
 * ```js
 * const names = ["shahed", "rahim", "karim"];
 * ```
 *
 * Task: map() ব্যবহার করে সব name uppercase করো।
 *
 * Expected:
 * ```md
 * ["SHAHED", "RAHIM", "KARIM"]
 * ```
 */

const names = ["shahed", "rahim", "karim"];
const nameInUpperCase = names.map((name) => name.toUpperCase());
console.log(nameInUpperCase);
