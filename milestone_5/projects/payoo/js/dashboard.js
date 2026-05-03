// add money feature
document.getElementById("btnAddMoney").addEventListener("click", function (e) {
  e.preventDefault();

  const bankAccountNumber =
    document.getElementById("bankAccountNumber").valueAsNumber;
  const ammountToAdd = document.getElementById("ammountToAdd").valueAsNumber;
  const selecBank = document.getElementById("selecBank").value;
  const pinNumber = document.getElementById("pinNumber").valueAsNumber;
  const totalbalance = parseInt(
    document.getElementById("totalbalance").innerText,
  );

  const totalAmmount = ammountToAdd + totalbalance;

  // set balance
  document.getElementById("totalbalance").innerText = totalAmmount;
});
