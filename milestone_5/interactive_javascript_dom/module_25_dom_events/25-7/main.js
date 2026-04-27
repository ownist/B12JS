// for li
document.getElementById("list_3").addEventListener("click", function (e) {
  console.log("item 3 clciked!");
  // e.stopPropagation(); // for stop propagate
  // e.stopImmediatePropagation(); // for immediate propagation
});

// for ol
document.getElementById("olContainer").addEventListener("click", function () {
  console.log("ol container clciked!");
});

document.getElementById("section").addEventListener("click", function () {
  console.log("section clciked!");
});

document.getElementById("body").addEventListener("click", function () {
  console.log("body clciked!");
});
