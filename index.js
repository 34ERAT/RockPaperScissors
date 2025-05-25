const handhands = {
  1: "✌️",
  2: "✊",
  3: "✋",
};
let computerScore = 0;
let playerScore = 0;
const messageview = document.getElementById("winnerMessageView");
const btnRock = document.getElementById("btnRock");
const btnScissors = document.getElementById("btnScissors");
const btnPaper = document.getElementById("btnPaper");
const computerHand = document.getElementById("computerHand");
const playerHand = document.getElementById("playerHand");

function randomHand() {
  return Math.floor(Math.random() * 3) + 1;
}

function updateScore(computer, player) {
  const computerwins = "Computer Wins";
  const PlayerWins = "Player Wins";
  if (computer === player) {
    messageview.innerText = "Draw";
    return;
  } else if (computer === 2 && player === 1) {
    messageview.innerText = computerwins;
    computerScore += 1;
  } else if (computer === 3 && player === 2) {
    messageview.innerText = computerwins;
    computerScore += 1;
  } else if (computer === 1 && player == 3) {
    messageview.innerText = computerwins;
    computerScore += 1;
  } else {
    messageview.innerText = PlayerWins;
    playerScore += 1;
  }

  document.getElementById("computerScore").innerText = computerScore;
  document.getElementById("playerScore").innerText = playerScore;
}

btnRock.addEventListener("click", (event) => {
  let computerhandvalue = randomHand();
  let playerhandvalue = 2;
  computerHand.innerText = handhands[computerhandvalue];
  playerHand.innerText = handhands[playerhandvalue];
  updateScore(computerhandvalue, playerhandvalue);
});

btnScissors.addEventListener("click", (event) => {
  let computerhandvalue = randomHand();
  let playerhandvalue = 1;
  computerHand.innerText = handhands[computerhandvalue];
  playerHand.innerText = handhands[playerhandvalue];
  updateScore(computerhandvalue, playerhandvalue);
});

btnPaper.addEventListener("click", (event) => {
  let computerhandvalue = randomHand();
  let playerhandvalue = 3;
  computerHand.innerText = handhands[computerhandvalue];
  playerHand.innerText = handhands[playerhandvalue];
  updateScore(computerhandvalue, playerhandvalue);
});
