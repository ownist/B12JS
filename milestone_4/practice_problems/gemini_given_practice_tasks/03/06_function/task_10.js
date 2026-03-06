/**
 * ১০. মাসিক খরচ হিসাব (Monthly Expense Calculator)
 *
 * একটি ফাংশন তৈরি করুন যা প্যারামিটার হিসেবে একটি অ্যারে গ্রহণ করবে (যেখানে সারা মাসের বিভিন্ন খরচের অ্যামাউন্ট দেওয়া আছে)। ফাংশনটি লুপ চালিয়ে সব খরচ যোগ করবে এবং মোট যোগফল রিটার্ন করবে।
 */

function monthlyExpenseCalculator(ammounts) {
  let sum = 0;

  for (const num of ammounts) {
    sum += num;
  }
  return sum;
}
const allExpense = [65, 20, 10, 80, 70];
const result = monthlyExpenseCalculator(allExpense);
console.log(`total sum of monly expense are: ${result}tk.`);
