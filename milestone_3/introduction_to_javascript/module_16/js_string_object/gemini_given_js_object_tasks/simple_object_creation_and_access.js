/**
 * Task-1: Simple Object Creation & Access
 */

const student = {
  name: "Shahed",
  id: 331558,
  physics: 60,
  chemistry: 58,
  math: 45,
};
console.log(student.chemistry);

/**
 * Task-2: Modify Object Properties
 */
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "White",
};

// year prop
car.year = 2024;

// isElectric
car.isElectric = false;
console.log(car);

/**
 * Task-3: Loop through an Object
 */
const professional = {
  name: "Arif",
  age: 30,
  profession: "Developer",
  city: "Dhaka",
};

for (const prop in professional) {
  console.log(`key: ${prop} | value: ${professional[prop]}`);
}

/**
 * Task-4: Count Object Properties
 */
const smartphone = {
  brand: "Samsung",
  model: "S23 Ultra",
  ram: "12GB",
  storage: "512GB",
  battery: "5000mAh",
  color: "Phantom Black",
};

console.log(Object.keys(smartphone).length);

/**
 * Task-5: Nested Object & Value Extraction
 */
const store = {
  name: "Tech World",
  location: "Dhaka",
  inventory: {
    product: "MicroSD Card",
    details: {
      capacity: "128GB",
      price: 1500,
      warranty: "Lifetime",
    },
  },
};
console.log(
  `The price of this product is ${store.inventory.details.price} and it has a ${store.inventory.details.warranty} warranty.`
);
