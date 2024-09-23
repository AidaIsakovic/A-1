//VARIABLES
//BUTTON
let button0 = document.getElementById("button0");

// TEXTS
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("resultText");


//DATA
let playerRoll = 0;
let aiRoll = 0;



//Process
button0.addEventListener("click", function() {
  getRandomNumberPlayer();
  getRandomNumberAI();
  showPlayerRollResult();
  showResult();
});

//CONTROLLER
function getRandomNumberPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;

}
function getRandomNumberAI() {
  aiRoll = Math.floor(Math.random() * 6) + 1;

  if (aiRoll > playerRoll) {
    resultText = ("AI Wins!");
  }
  else if (playerRoll > aiRoll) {
    showAiRollResult("Player Wins!");
  }
  if (aiRoll === playerRoll) {
    showAiRollResult("It's A Draw!");
  }

//VIEWS
}
  function showResult () {
    resultText.innerHTML = "Result: " + resultText;
  }
  function showPlayerRollResult() {
    playerRollText.innerHTML = "Player " + playerRoll;
  }
  function showAiRollResult() {
    aiRollText.innerHTML = "AI " + aiRoll;
  }
