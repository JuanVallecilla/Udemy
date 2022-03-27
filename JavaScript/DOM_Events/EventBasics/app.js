const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("Did you just click me?");
  console.log("Don't do that please");
};

function scream() {
  console.log("AHHH");
  console.log("Its comming");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
  alert("You were here");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("STOP IT AHHHHHHHHHHHHHHHHHHHHHH");
});

function twist() {
  console.log("Twisssssssssssst");
}

function shout() {
  console.log("Yeaaaaaaaaaaaaaaaaaaaaaaa");
}

const tasbtn = document.querySelector("#tas");

// tasbtn.onclick = twist;
// tasbtn.onclick = shout;

tasbtn.addEventListener("click", twist);
tasbtn.addEventListener("click", shout);
