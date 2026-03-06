const numbers = [2, 5, 8, 6, 42]; // normal array

/** array of object
 *
 * const products = [{}, {}, {}];
 *
 * const employees = [
 *  {},
 *  {},
 * ];
 */

/**
 * eita hocche array of objects
 *
 * ekta array er moddhe bivinno type er data  thakte pare. jei type er ri data thak na keno array er prottekta element er por amra coma use korbo, like this one
 */

// const players = [{}, {}, {}];
// console.log(numbers);
// console.log(players);

// array of object
const employees = [
  {
    name: "Shahed",
    designation: "Web Developer",
    slalary: 25000,
  },

  {
    name: "Tanvir Sarkar",
    designation: "Designer",
    slalary: 15000,
  },

  {
    name: "Abu Daud",
    designation: "Designer",
    slalary: 16000,
  },

  {
    name: "Fahad",
    designation: "Designer",
    slalary: 30000,
  },
];

// array er index dhore object er value o cng krte pari
employees[1].name = "Tanvir";

// console.log(employees[0].name);
// console.log(employees[4]); // output will be "undefined" cz array er moddeh 4 number index define kora hoi nai

/**
 * array of object ke loop chalano
 */
// for (const employee of employees) {
//   console.log(employee.name);
// }

/** amra chaile emonvabew krte pari */
for (const emp of employees) {
  const empInfo = `${emp.name}: ${emp.slalary}`;
  console.log(empInfo);
}
