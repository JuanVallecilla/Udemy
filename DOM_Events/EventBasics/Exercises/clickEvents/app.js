// Coding Exercise 60: Click Events Exercise
const btn = document.querySelector("#hello");
const btn2 = document.querySelector("#goodbye");

btn.addEventListener("click", function () {
  console.log("hello");
});

btn2.addEventListener("click", function () {
  console.log("goodbye");
});
