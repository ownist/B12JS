const employee = {
  firstName: "Tanvir",
  lastName: "Sarkar",
  employeeId: 331558,
  departmentCode: "HR",
};

let userLastName = employee.lastName.toLowerCase();
let firstNameLastThreeChr = employee.firstName.slice(-3);

if (userLastName.length <= 3) {
  console.log(`username: ${userLastName}${employee.employeeId}@alphacorp.com`);
  console.log(`password: ${firstNameLastThreeChr}#${employee.departmentCode}`);
} else {
  console.log(
    `username: ${userLastName.slice(0, 3)}${employee.employeeId}@alphacorp.com`,
  );
  console.log(`password: ${firstNameLastThreeChr}#${employee.departmentCode}`);
}
