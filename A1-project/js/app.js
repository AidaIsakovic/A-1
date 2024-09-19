// VARIABLES
// BUTTON
let button0 = document.getElementById("button0");

//texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("resultText");
let playerScoreText = document.getElementById("playerScore");
let aiScoreText = document.getElementById("aiScore");

// DATA
let playerRoll= getRandomNumberOneToSixPlayer();
console.log(playerRoll);
let aiRoll = getRandomNumberOneToSixAi();
console.log(aiRoll);

//SCORE
let playerScore = 0;
let aiScore = 0;

//PROCESS
button0.addEventListener("click", function(){
  getRandomNumberOneToSixPlayer();
  showPlayerResult();
  getRandomNumberOneToSixAi();
  showAiResult();

});

//CONTROLLERS
function getRandomNumberOneToSixPlayer() {
  return Math.floor(Math.random() * 6) + 1;
}
function getRandomNumberOneToSixAi() {
  return Math.floor(Math.random() * 6) + 1;
}


//views
function showPlayerRollResult(){
  playerScoreText.innerHTML = playerRoll;
}

function showAiResult(){
  aiScoreText.innerHTML = aiRoll;
}

function showResultText(){
  resultText.innerHTML = resultText;
}
