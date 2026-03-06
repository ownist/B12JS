const computer = {
  brand: "Apple",
  price: 150000,
  processor: "M2",
};

for (const comp in computer) {
  console.log(`${comp}: ${computer[comp]}`);
}
