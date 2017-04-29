// requires ClozeCard js file and inquirer package
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");

// arr of objects to hold predefined questions
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
    text: "Meg's friends assumed her name was short for Megan. In actuality, when Lois hands Meg's birth certificate, to Peter, he alters it; Meg's birth name is Megatron Griffin.",
    cloze: "Megatron"
  },
  {
    text: "The big chicken that always fights Peter is named Ernie.",
    cloze: "Ernie"
  }
];

// function wrapper that cycles through cards and prompts user for answers
function askQuestion(count) {
  // sets count equal to number of questions
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
      // if user is right, congratulates
      if (user.answer === newCard.cloze) {
        console.log("You got it right!\n-------------------------------------");
      // if wrong, prints correct answer
      } else {
        console.log("The correct response is: " + newCard.fullText.replace(newCard.cloze, "\"" + newCard.cloze + "\"") + "\n-------------------------------------");
      }
      // asks next question with updated count
      askQuestion(count);
    });
  }
}

// calls function on runTime with initial count set
askQuestion(0);
