player = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

opponent = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

function updatedScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

player.button.addEventListener("click", function (e) {
  updatedScore(player, opponent);
});

opponent.button.addEventListener("click", function (e) {
  updatedScore(opponent, player);
});

winningScoreSelect.addEventListener("change", function (e) {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (const p of [player, opponent]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }

  // player.score = 0;
  // opponent.score = 0;
  // player.display.textContent = 0;
  // opponent.display.textContent = 0;
  // player.display.classList.remove("has-text-success", "has-text-danger");
  // opponent.display.classList.remove("has-text-success", "has-text-danger");
  // player.button.disabled = false;
  // opponent.button.disabled = false;
}
