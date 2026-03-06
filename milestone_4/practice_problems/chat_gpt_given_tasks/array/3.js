const fruits = ["apple", "cat", "banana", "dog"];
const result = [];

for (const fruit of fruits) {
  if (fruit.length > 4) {
    result.push(fruit);
  }
}

console.log(result);
