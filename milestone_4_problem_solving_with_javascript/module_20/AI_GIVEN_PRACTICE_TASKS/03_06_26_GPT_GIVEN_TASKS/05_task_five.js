/**
 * Object array থেকে শুধু name বের করো
 *
 * ```js
 * const users = [
 * {name: "Shahed", age: 22},
 * {name: "Rahim", age: 25},
 * {name: "Karim", age: 19}
 * ];
 * ```
 *
 * Task: map() ব্যবহার করে শুধু name এর array বানাও
 *
 * Expected:
 * ```md
 * ["Shahed", "Rahim", "Karim"]
 * ```
 */

const users = [
  { name: "Shahed", age: 22 },
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 19 },
];

const names = users.map((user) => user.name);
console.log(names);
