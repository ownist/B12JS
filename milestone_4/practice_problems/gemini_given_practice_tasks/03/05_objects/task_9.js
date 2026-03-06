/**
 * একটি কোম্পানির ৫ জন কর্মচারীর নাম এবং বর্তমান বেতন দিয়ে একটি অবজেক্ট তৈরি করুন। কোম্পানি সিদ্ধান্ত নিয়েছে সবার বেতন ১০% বাড়াবে। লুপ ব্যবহার করে অবজেক্টের প্রতিটি কর্মচারীর বেতন আপডেট করুন এবং নতুন অবজেক্টটি দেখান।
 */

const employeesSalary = {
  shahed: 20000,
  rakib: 15000,
  tanvir: 12000,
  fahad: 41000,
  siam: 52000,
};

for (const keys in employeesSalary) {
  const salary = employeesSalary[keys];
  // 10% update
  const updateSalary = (salary * 10) / 100;
  const finalSalary = salary + updateSalary;

  employeesSalary[keys] = finalSalary;
}
console.log(employeesSalary);
