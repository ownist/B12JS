const deleteField = document.getElementById("delete");
const btnDelete = document.getElementById("btnDelete");

deleteField.addEventListener("keyup", function (e) {
  if (e.target.value === "delete") {
    btnDelete.removeAttribute("disabled");
  } else {
    btnDelete.setAttribute("disabled", true);
  }
});

btnDelete.addEventListener("click", function () {
  document.querySelector("h1").innerText = "Congo! deleted successfully";
  deleteField.value = "";
});
