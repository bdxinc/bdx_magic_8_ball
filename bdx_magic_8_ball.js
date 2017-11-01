var answer = ["Chance are you're doomed... but hopefully not!",
  "I woudn't bet on you...",
  "Maybe give up now",
  "Consider it done!",
  "No need to worry!!",
  "I dont know anything.",
  "Let's ask Little Kitty!?"];

var min = 0;
var max = answer.length;

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function resetBall(){
  var containerEl = document.getElementsByClassName("flip-container")[0];

  document.getElementById("answer").textContent = "";

  containerEl.classList.remove("hover");
}


function clearError() {
	  document.getElementById("error").textContent = "";
    document.getElementById("confirm").style.display = "none";
}


function flipBall() {
  var rAnswer = answer[random(min, max)];
  console.log(rAnswer);

  var containerEl = document.getElementsByClassName("flip-container")[0];
  var questionEl = document.getElementById("question");
  var answerEl = document.getElementById("answer");

  if(questionEl.value.endsWith("?") != true) {
    document.getElementById("error").textContent = "Feed me a question! ---->> (\" ? \")";
    document.getElementById("confirm").style.display = "inline";

    questionEl.value = "";
  } else {
    containerEl.classList.add("hover");


    document.getElementById("answer").textContent = rAnswer;

    questionEl.value = "";

    window.setTimeout(resetBall, 6000);
  }
}


var eL = document.getElementById("submit");
eL.addEventListener("click", flipBall, true);

var errorEl = document.getElementById("confirm");
errorEl.addEventListener("click", clearError, true);



// // TODO:
//
// 1.update responses - creative**
//
// 2. css card flip transition
//
// 3.validation & ?(regex stuff)
