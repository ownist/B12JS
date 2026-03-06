/**
 * 18 বছরের বেশি user filter করো
 *
 * ```js
 * const users = [
 * {name: "Shahed", age: 22},
 * {name: "Rahim", age: 16},
 * {name: "Karim", age: 19}
 * ];
 * ```
 *
 * Task: filter() দিয়ে 18+ user বের করো
 *
 * Expected:
 * ```md
 * [
 * {name:"Shahed", age:22},
 * {name:"Karim", age:19}
 * ]
 * ```
 */

const users = [
  { name: "Shahed", age: 22 },
  { name: "Rahim", age: 16 },
  { name: "Karim", age: 19 },
];

const adultUsers = users.filter((user) => user.age > 18);
console.log(adultUsers);
