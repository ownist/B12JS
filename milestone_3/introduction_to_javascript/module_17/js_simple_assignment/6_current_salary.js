let experience = 40;
let startingSalary = 30000;

for (let i = 1; i <= experience; i++) {
  startingSalary = startingSalary * 1.05;
}
console.log(startingSalary.toFixed(2));
