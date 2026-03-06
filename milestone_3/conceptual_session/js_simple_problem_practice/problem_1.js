let totalRows = 500;
let ticketPrice = 500;
let totalIncome = 0;

for (let i = 1; i <= totalRows; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(`Row ${i} - Premium Row`);
    ticketPrice = 800;
    totalIncome += ticketPrice;
  } else {
    console.log(`Row ${i} - Normal Row`);
    ticketPrice = 500;
    totalIncome += ticketPrice;
  }
}
console.log(`Total Income: ${totalIncome} tk.`);
