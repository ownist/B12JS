/**
 * ৬. ডিসকাউন্ট চেকার (Discount System)
 *
 * একটি ফাংশন লিখুন যা মোট কেনাকাটার পরিমাণ (Amount) ইনপুট নেবে। যদি কেনাকাটার পরিমাণ ১০০০ টাকার বেশি হয়, তাহলে ১০% ডিসকাউন্ট বাদ দিয়ে নতুন দাম রিটার্ন করবে। আর যদি ১০০০ বা তার কম হয়, তবে আসল দামই রিটার্ন করবে।
 */

function checkDiscount(ammount) {
  if (ammount >= 1000) {
    // 10% discount
    const discPrice = (ammount * 10) / 100;
    const payAmmount = ammount - discPrice;
    // return payammount
    return payAmmount;
  } else {
    return ammount;
  }
}

const result = checkDiscount(1000);
console.log(`plz pay: ${result}tk.`);
