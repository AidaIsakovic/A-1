//BUTTON
let button0 = document.getElementById("button0");

// TEXTS
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let evaluationText = document.getElementById("evaluationText");
let playerScoreText=document.getElementById("playerScoreText");
let aiScoreText=document.getElementById("aiScoreText");

//DATA
let playerRoll = 0;
let aiRoll = 0;

let playerScore=0;
let aiScore=0;

tryLoadGame();
updateScores();

//Process
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  showPlayerRollResult();
  getRandomNumberOneToSixForAi();
  showAiRollResult();
  evaluateRoll();
  updateScores();
  saveAsCookie();
});

//CONTROLLER
function getRandomNumberOneToSixForPlayer(){
  playerRoll =Math.floor(Math.random()* 6) + 1;
}
function getRandomNumberOneToSixForAi(){
  aiRoll =Math.floor(Math.random() * 6) + 1;
}

function evaluateRoll(){
  if(playerRoll > aiRoll){
    evaluationText.innerHTML= "You Win!";
    playerScore++;
  } else if(playerRoll < aiRoll){
    evaluationText.innerHTML= "AI Wins!";
    aiScore++;
  } else{
    evaluationText.innerHTML= "It´s A Draw!";
  }
}

//VIEWS

  function showPlayerRollResult(){
    playerRollText.innerHTML= "Player rolled: " + playerRoll;
  }

  function showAiRollResult(){
    aiRollText.innerHTML = "AI rolled: " + aiRoll;
  }
  function updateScores(){
    playerScoreText.innerHTML= "Player total wins: " + playerScore.toString();
    aiScoreText.innerHTML= "AI total wins: " + aiScore.toString();
  }

// COOKIES
function saveAsCookie() {
  document.cookie = "playerScore=" +
    playerScore + ";expires=Tue, 31 Dec 2024 12:00:00UTC";
  document.cookie = "aiScore=" + aiScore + ";expires=Thu, 18 Dec 2025 12:00:00UTC";
}

function tryLoadGame() {
  playerScore = getCookie ("playerScore");
  aiScore=getCookie ("aiScore");
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);       }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);       }   }
  return 0;
}
