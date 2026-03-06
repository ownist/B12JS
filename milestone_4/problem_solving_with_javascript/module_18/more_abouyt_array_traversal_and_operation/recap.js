const books = ["physics", "javascript", "english", "math"];

// looping array
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}

// reverse array
const revBooks = books.reverse();
console.log(revBooks);

// sort()
const sortBooks = books.sort();
console.log(sortBooks);

// array of objects
const products = [
  { name: "Pencile", color: "black", price: 10 },
  { name: "Pen", color: "orange", price: 15 },
  { name: "Laptop", color: "blue", price: 80000 },
];

// array of array (2D array) --> 2 dimentional array
const matrix = [
  [2, 5, 4, 8],
  [8, 5, 9, 5],
  [4, 9, 2, 0],
];
