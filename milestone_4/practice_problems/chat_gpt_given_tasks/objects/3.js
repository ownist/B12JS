const xmMarks = {
  math: 85,
  english: 65,
  physics: 90,
};

for (const marks in xmMarks) {
  if (xmMarks[marks] > 80) {
    console.log(`${marks}: ${xmMarks[marks]}`);
  }
}
