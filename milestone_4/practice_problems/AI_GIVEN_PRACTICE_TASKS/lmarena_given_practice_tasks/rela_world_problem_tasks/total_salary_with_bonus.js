/**
 * ৩. স্যালারি এবং বোনাস ক্যালকুলেটর (Total Salary with Bonus)
 *
 * একটি কোম্পানির এমপ্লয়িদের তালিকা (Array of Objects) দেওয়া আছে। প্রতিটি অবজেক্টে এমপ্লয়ির নাম, salary (মূল বেতন) এবং experience (কাজের অভিজ্ঞতা বছরে) দেওয়া আছে।
 *
 * একটি ফাংশন লিখুন যা এই অ্যারেটি গ্রহণ করবে।
 * ফাংশনটি প্রতিটি এমপ্লয়ির বেতন হিসাব করবে। শর্ত হলো: যাদের অভিজ্ঞতা ৫ বছর বা তার বেশি, তারা মূল বেতনের সাথে ২০% বোনাস পাবে। বাকিরা শুধু মূল বেতন পাবে।
 * ফাংশনটি মাস শেষে কোম্পানির মোট কত টাকা খরচ হবে (সব এমপ্লয়ির বেতন ও বোনাস মিলিয়ে), সেই সংখ্যাটি রিটার্ন করবে।
 */

const employeesData = [
  { name: "shahed", salary: 15000, experience: 2 },
  { name: "sabbir", salary: 20000, experience: 5 },
  { name: "siam", salary: 15042, experience: 4 },
  { name: "lahid", salary: 35000, experience: 8 },
  { name: "niloy", salary: 40000, experience: 3 },
];

function totalSalaryWithBonus(employees) {
  let totalCost = 0;

  for (const emp of employees) {
    if (emp.experience >= 5) {
      // 20% bonus
      const bonusSalary = (emp.salary * 20) / 100;
      const totalSalary = (emp.salary + bonusSalary);
      totalCost += totalSalary;
    } else {
      totalCost += emp.salary;
    }
  }
  // return total cost
  return `Total Cost end of the month: ${totalCost} tk.`;
}

const employee = employeesData;
const totalCostInMonth = totalSalaryWithBonus(employee);
console.log(totalCostInMonth);
