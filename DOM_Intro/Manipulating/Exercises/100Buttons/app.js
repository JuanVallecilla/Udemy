// let appendTo = document.getElementById("container");
// let button = document.createElement("button");
// button.innerText = "Hey!";
// document.body.appendChild(button);

for (let i = 0; i < 100; i++) {
  const appendTo = document.getElementById("container");
  const button = document.createElement("button");
  button.innerText = "Hey!";
  appendTo.appendChild(button);
}
