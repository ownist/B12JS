const btnContinue = document.getElementById("btnContinue");

// login button functionality
btnContinue.addEventListener("click", function (e) {
  e.preventDefault();

  // valid phone number and pin number
  const phoneNumber = "01234567891";
  const pinNumber = "1234";

  // get users data
  const userPhoneNumber = document.getElementById("phone").value;
  const userPinNumber = document.getElementById("pin").value;

  // check user data and redirect to the dashboard page
  if (userPhoneNumber === phoneNumber && userPinNumber === pinNumber) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid phone number and pin. Tray again!");
  }
});
