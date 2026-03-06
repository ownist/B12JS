const person = {
  name: "sodor uddin",
  age: 25,
  profession: "Web Developer",
  salary: 25000,
  isMarried: true,

  // bidgute style property name
  "fav places": ["bandorban", "saintmartin", "kuakata"],
};

console.log(person);

// change property value using dot notation
person.salary = 30000;
console.log(person);

// change value using bracket/array notation
person["age"] = 30;
console.log(person);

person["fav places"] = ["maldivs", "bali", "pataya"];
console.log(person);

// hakla ektu adjusment. property ke ekta variable er under e string er moddhe rakhbo
const keyName = "profession";
console.log(person[keyName]);

const propName = "profession";
person[propName] = "Devops";
console.log(person);
