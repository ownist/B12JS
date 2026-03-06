const numbers = [2, 5, 8, 6, 8];
const tournaments = [[], [], []];

const examMarks = [
  [25, 65, 45, 8, 59],
  [21, 52, 78, 20, 35],
  [20, 75, 15, 64, 54],
];

// console.log(examMarks[0]);
// console.log(examMarks[2]);

const firstClassMarks = examMarks[0];
// console.log(firstClassMarks[0]);

// examMarks[0][3] = 800;
// console.log(examMarks);

// pop second element
// examMarks[1].pop();
// examMarks[1].push(400);
// console.log(examMarks);

/**
 * loop on array
 */
for (const marks of examMarks) {
  console.log(marks);
}
