const li = document.querySelectorAll("li");

// for (let all of li) {
//   all.classList.toggle("highlight");
// }

// Using for loop
for (let index = 0; index < li.length; index++) {
  li[index].classList.toggle("highlight");
}
