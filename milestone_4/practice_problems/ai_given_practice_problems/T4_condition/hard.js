let year = 2026;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Lipiari");
} else {
  console.log("Not a Lipiari");
}
