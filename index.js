var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;
var name = readlineSync.question("What is your name? ");
console.log("Welcome " + name + " to" + chalk.yellowBright.bold(" DO YOU KNOW Prateek!!"));

function play(ques, ans) {
  var userAns = readlineSync.question(ques);
  if (userAns.toUpperCase() === ans.toUpperCase()) {
    console.log(chalk.green("Right!"));
    score += 1;
  }
  else {
    console.log(chalk.red("Wrong!"));
    score -= 1;
  }
  console.log("current score: " + score);
  console.log("-------------");
}


var questions = [{
  question: "What is my age?",
  answer: "22"
}, {
  question: "Where do I live?",
  answer: "Noida"
}, {
  question: "What is my favourite sport?",
  answer: "cricket"
}, {
  question: "My favourite superhero would be?",
  answer: "Iron man"
}, {
  question: "In which college am I?",
  answer: "JSS"
}];

for (var i = 0; i < questions.length; i++) {
  var currQues = questions[i];
  play(currQues.question, currQues.answer);
}

var highestScore = [{
  name: "Prateek",
  score: 3
}];


console.log("YOU SCORED " + score);

console.log("Checkout The Highest Score");
if (score > highestScore[0].score)
  console.log(chalk.bgCyan("Highest Score: " + name, score));
else
  console.log(chalk.bgCyan("Highest Score: " + highestScore[0].name, highestScore[0].score));  