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

var rAnswer = answer[random(min, max)];
console.log(rAnswer);

document.getElementById("answer").textContent = rAnswer;


// // TODO:
//
// 1.setup responses
//
// 2.math.random
//
// 3.print/alert
