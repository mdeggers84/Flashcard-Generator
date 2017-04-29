// ClozeCard constructor
function ClozeCard(text, cloze) {
  // checks to see if the cloze is found within the full text
  if (text.indexOf(cloze) !== -1) {
    if (this instanceof ClozeCard) {
      this.cloze = cloze;
      this.fullText = text;
      this.partialText = function() {
        // returns formatted partial text when called
        return this.fullText.replace(this.cloze, " ... ");
      };
    } else {
      // allows user to create constructor without 'new' keyword
      return new ClozeCard(text, cloze);
    }
  } else {
    // logs an error to the console when cloze isn't found within text
    console.log("Error: \"" + cloze + "\" is not found in \"" + text + "\"");
  }
}

// exports js for use in other files
module.exports = ClozeCard;
