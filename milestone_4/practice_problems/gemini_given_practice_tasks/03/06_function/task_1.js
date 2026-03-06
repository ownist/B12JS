/**
 * ১. গ্রেড ক্যালকুলেটর (Grade Calculator)
 *
 * একটি ফাংশন লিখুন যা একটি ছাত্রের প্রাপ্ত নম্বর (Number) ইনপুট হিসেবে নেবে। শর্ত অনুযায়ী এটি 'A', 'B', 'C', 'D' অথবা 'F' রিটার্ন করবে। (যেমন: ৮০ বা তার বেশি হলে 'A', ৭০-এর উপরে 'B' ইত্যাদি)।
 *
 * rules:
 * ৮০ - ১০০: A+ (৫.০০)
 * ৭০ - ৭৯: A (৪.০০)
 * ৬০ - ৬৯: A- (৩.৫০)
 * ৫০ - ৫৯: B (৩.০০)
 * ৪০ - ৪৯: C (২.০০)
 * ৩৩ - ৩৯: D (১.০০)
 * ০ - ৩২: F (০.০০)
 */

function grade(marks) {
  if (marks >= 80 && marks <= 100) {
    console.log("A+ (5.00)");
  } else if (marks >= 70 && marks < 80) {
    console.log("A (4.00)");
  } else if (marks >= 60 && marks < 70) {
    console.log("A- (3.50)");
  } else if (marks >= 50 && marks < 60) {
    console.log("B (3.00)");
  } else if (marks >= 40 && marks < 50) {
    console.log("C (2.00)");
  } else if (marks >= 33 && marks < 40) {
    console.log("D (1.00)");
  } else if (marks >= 0 && marks < 33) {
    console.log("F (0.00)");
  } else {
    console.log("Invalid Marks");
  }
}

grade(95);
