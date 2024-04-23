console.log("App.js loaded!");

function changeColor() {
  const firstChild = document.querySelectorAll("div");
  for (i = 0; i < firstChild.length; i++) {
    firstChild[i].style.backgroundColor = "green";
  }
}
