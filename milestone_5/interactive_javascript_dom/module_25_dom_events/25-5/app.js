document.getElementById("cmtBtn").addEventListener("click", function () {
  const cmtContainer = document.getElementById("cmtContainer");
  const commentBox = document.getElementById("commentBox");
  const cmtText = commentBox.value;

  const p = document.createElement("p");
  p.innerText = cmtText;
  p.classList.add("cmt");

  cmtContainer.appendChild(p);
  commentBox.value = "";
});
