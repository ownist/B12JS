// add money feature
const validpinNumber = 1234;

document.getElementById("btnAddMoney").addEventListener("click", function (e) {
  e.preventDefault();

  const bankAccountNumber = document.getElementById("bankAccountNumber").value;
  const ammountToAdd = document.getElementById("ammountToAdd").valueAsNumber;
  const selecBank = document.getElementById("selecBank").value;
  const pinNumber = document.getElementById("pinNumber").valueAsNumber;
  const totalbalance = parseInt(
    document.getElementById("totalbalance").innerText,
  );

  // validation
  if (bankAccountNumber.length < 11) {
    alert("Please provide a valid account number.");
    return;
  }

  if (pinNumber !== validpinNumber) {
    alert("Invalid pin number. Try again!");
    return;
  }

  const totalAmmount = ammountToAdd + totalbalance;

  // set balance
  document.getElementById("totalbalance").innerText = totalAmmount;
});
