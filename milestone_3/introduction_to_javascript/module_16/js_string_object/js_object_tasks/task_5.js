let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (const prop in myObject) {
  let myObjValue = myObject[prop];
  console.log(`key: ${prop} | type: ${typeof myObjValue}`);
}
