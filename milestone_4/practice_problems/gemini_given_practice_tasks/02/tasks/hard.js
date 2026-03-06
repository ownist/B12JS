/**
 * hard level
 *
 * calculate total bill
 */
function calculateTotalBill(price, quantity, taxRate) {
  // total price
  const totalprice = price * quantity;
  // tax rate
  const tax = (totalprice * taxRate) / 100;
  // total bill
  const totalBill = totalprice + tax;

  // return total bill
  return totalBill;
}
// call this function
const result = calculateTotalBill(100, 1, 15);
console.log(`total bill: ${result}tk.`);
