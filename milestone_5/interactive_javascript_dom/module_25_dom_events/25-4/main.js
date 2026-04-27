console.log("js file connected");

document.getElementById("btnChange").addEventListener("click", function (e) {
  const title = document.getElementById("title");
  title.innerText = "Updated title text";
  console.log(title);
});

// change value using input field
document.getElementById("btnUpdate").addEventListener("click", function () {
  const inputValue = document.getElementById("nameField").value;
  document.getElementById("name").innerText = inputValue;
});
