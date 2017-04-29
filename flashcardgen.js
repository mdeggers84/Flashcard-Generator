var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");

var questionArr = [
  {
    text: "George Lucas officially gave the producers clearance to do \"Star Wars\" gags because he's a fan of the show.",
    cloze: "George Lucas"
  },
  {
    text: "Seth MacFarlane based the voice of Peter Griffin on a security guard he knew while going to college.",
    cloze: "Peter Griffin"
  },
  {
    text: "Seth MacFarlane has admitted that the family's constant abuse of Meg is a result of \"a bunch of male writers not knowing how to write for a teenage girl\".",
    cloze: "Meg"
  },
  {
    text: "This is a test.",
    cloze: "nope"
  }
];

function askQuestion(count) {
  if (count < questionArr.length) {
    // the constructor works with or without the 'new' keyword
    var newCard = new ClozeCard(questionArr[count].text, questionArr[count].cloze);
    // var newCard = ClozeCard(questionArr[count].text, questionArr[count].cloze);

    count++;
    console.log("-------------------------------------\n" +
      newCard.partialText());
    inquirer.prompt([
      {
        type: "input",
        message: "Answer: ",
        name: "answer"
      }
    ]).then(function(user) {
      if (user.answer === newCard.cloze) {
        console.log("You got it right!");
      } else {
        console.log("The correct response is: " + newCard.fullText.replace(newCard.cloze, "\"" + newCard.cloze + "\"") + "\n-------------------------------------");
      }
      askQuestion(count);
    });
  }
}

askQuestion(0);
