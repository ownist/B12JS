const student = { name: "Shahed", roll: 331558, department: "CSE" };

// output: email generator
console.log(
  `${student.name.toLowerCase()}${student.roll}.${student.department.toLowerCase()}@ph.ac.bd`,
);
