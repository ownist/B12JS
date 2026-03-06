let lastDay = 6;

for (let i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(`${i} - medicine`);
  } else {
    console.log(`${i} - reset`);
  }
}
