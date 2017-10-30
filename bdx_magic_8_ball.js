var answer = ["I think that it will work out!",
  "Maybe... maybe not",
  "Probably not",
  "Highly likely",
  "It is certain!",
  "I dont know about that",
  "My sources say no"];

var min = 0;
var max = answer.length;

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function resetBall(){

  document.getElementById("answer").textContent = "";

  document.getElementById("frontOfBall").style.display = "block";
  document.getElementById("backOfBall").style.display = "none";
}


function flipBall() {
  var rAnswer = answer[random(min, max)];
  console.log(rAnswer);

  var questionEl = document.getElementById("question");
  var answerEl = document.getElementById("answer");

  document.getElementById("frontOfBall").style.display = "none";
  document.getElementById("backOfBall").style.display = "block";

  document.getElementById("answer").textContent = rAnswer;

  questionEl.value = "";

  window.setTimeout(resetBall, 3000);
}


var eL = document.getElementById("submit");
eL.addEventListener("click", flipBall, true);






// // TODO:
//
// 1.setup responses
//
// 2.math.random
//
// 3.print/alert
