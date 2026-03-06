/**
 * ৮. এটিএম উইথড্রয়াল (ATM Withdrawal)
 *
 * একটি ফাংশন লিখুন যা দুটি প্যারামিটার নেবে: ১) বর্তমান ব্যালেন্স এবং ২) কত টাকা তুলতে চান। যদি তোলার পরিমাণ বর্তমান ব্যালেন্সের চেয়ে বেশি হয়, তবে একটি মেসেজ রিটার্ন করবে "Insufficient Funds"। আর যদি কম বা সমান হয়, তবে টাকা তোলার পর অবশিষ্ট ব্যালেন্স রিটার্ন করবে।
 */

function atmWithDraw(totalBalance, withDrawBalance) {
  if (withDrawBalance > totalBalance) {
    return "Insufficient Funds";
  } else {
    const balance = totalBalance - withDrawBalance;
    return `total blnc: ${totalBalance}tk, withdraw: ${withDrawBalance}tk, and bortoman blnc: ${balance}tk.`;
  }
}
const result = atmWithDraw(110, 65);
console.log(result);
