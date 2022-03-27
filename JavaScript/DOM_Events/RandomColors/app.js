const tittle = document.querySelector("h1");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  newcolors = rndColor();
  document.body.style.background = newcolors;
  tittle.innerText = newcolors;
});

const rndColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};
