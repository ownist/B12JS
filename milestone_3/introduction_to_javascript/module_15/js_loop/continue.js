// continue -> skip rest of the code for this iteration
// break -> i'm done with this loop (mane ami eikhan theke sesh... loop end)

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

console.log("- break -");

let n = 1;
while (n <= 50) {
  n++;
  if (n % 5 !== 0) {
    continue;
  }
  console.log(n);
}
