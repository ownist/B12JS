for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("----------- break ----------");

// give me the list of numbers between 1 to 30 divisible by 5
for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

console.log("----- break ----");

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

console.log("-- sum break ------");

// 1-20 porjonto jei songkhagulo ache seigulor sum ber kore dewar programm
let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
    sum += i;
    console.log(`sum: ${sum}`);
  }
}

console.log(`total sum of numbers are: ${sum}`);
