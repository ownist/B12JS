const person = {
  name: "sodor uddin",
  age: 25,
  profession: "Web Developer",
  salary: 25000,
  isMarried: true,

  // bidgute style property name
  "fav places": ["bandorban", "saintmartin", "kuakata"],
};
// console.log(person);

// dot notation
console.log(person.profession);
const income = person.salary;
console.log(income);

// bracket notation/array notation
console.log(person["age"]);
const boyos = person["age"];
console.log(boyos);

console.log(person["fav places"]);
console.log(person["fav places"].join(' | '));
