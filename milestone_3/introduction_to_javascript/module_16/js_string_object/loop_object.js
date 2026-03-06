const mobile = {
  phone: "Androaid",
  brand: "Honor",
  model: "X6c",
  price: 15000,
  color: "Sky Blue",
  camera: "50mp",
};

for (const prop in mobile) {
  console.log(prop);
  console.log(mobile[prop]);
}

console.log("------- break -------");

const keys = Object.keys(mobile);
// console.log(keys);
for (const key of keys) {
  console.log(`${key}: ${mobile[key]}`);
}
