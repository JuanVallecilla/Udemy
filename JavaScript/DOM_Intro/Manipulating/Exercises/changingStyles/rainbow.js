// Coding Exercise 56: Rainbow Text Exercise
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const rainbow = document.querySelectorAll("span");

for (let index = 0; index < colors.length; index++) {
  rainbow[index].style.color = colors[index];
}

// Using for in Loop
// for (const iterator in colors) {
//   rainbow[iterator].style.color = colors[iterator];
// }
