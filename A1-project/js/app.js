// VARIABLES
// BUTTON
let button0 = document.getElementById("button0");

//texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("resultText");

// DATA
let playerRoll= getRandomNumberOneToSixPlayer();
console.log(playerRoll);
let aiRoll = getRandomNumberOneToSixAi();
console.log(aiRoll);

//SCORE


//PROCESS
button0.addEventListener("click", function(){

  getRandomNumberOneToSixPlayer();
  showPlayerRollResult();
  getRandomNumberOneToSixAi();
  showAiResult();

});

//CONTROLLERS
function getRandomNumberOneToSixPlayer(){
  return Math.floor(Math.random() * 6) + 1;
}
function getRandomNumberOneToSixAi(){
  return Math.floor(Math.random() * 6) + 1;
}


//views
function showPlayerRollResult(){
  playerRollText.innerHTML = playerRoll;
}
function showAiResult(){
  aiRollText.innerHTML = aiRoll;
}
