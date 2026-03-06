const person = {
  name: "Karim",
  age: 16,
  city: "Chittagong",
};
const newObject = [];

for (const prop in person) {
  const obj = {
    key: prop,
    value: person[prop],
  };
  newObject.push(obj);
}

console.log(newObject);
