let btn = document.getElementById("mybtn");

btn.addEventListener("click", function () {
  btn.textContent = "CLICKED!";
});

let hov = document.getElementById("task2");

hov.addEventListener("mouseenter", function () {
  hov.style.backgroundColor = "red";
});
hov.addEventListener("mouseleave", function () {
  hov.style.backgroundColor = "purple";
});

let inp = document.getElementById("input");

inp.addEventListener("keyup", function () {
  console.log(event.key);
});

let form = document.getElementById("form");
let inp2 = document.getElementById("input2");

form.addEventListener("submit", function () {
  event.preventDefault();
  console.log(inp2.value);
});

let inp3 = document.getElementById("input3");

inp3.addEventListener("focus", function () {
  inp3.style.borderColor = "red";
});
inp3.addEventListener("blur", function () {
  inp3.style.borderColor = "purple";
});

let list = document.getElementById("list");

list.addEventListener("click", function (aim) {
  if (aim.target && aim.target.nodeName == "LI") {
    aim.target.style.backgroundColor = "purple";
  }
});
