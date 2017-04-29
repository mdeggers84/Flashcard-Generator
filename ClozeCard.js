function ClozeCard(text, cloze) {
  if (text.indexOf(cloze) !== -1) {
    if (this instanceof ClozeCard) {
      this.cloze = cloze;
      this.fullText = text;
      this.partialText = function() {
        return this.fullText.replace(this.cloze, " ... ");
      };
    } else {
      return new ClozeCard(text, cloze);
    }
  } else {
    // logs an error to the console when cloze isn't found within text
    console.log("Error: \"" + cloze + "\" is not found in \"" + text + "\"");
  }
}

module.exports = ClozeCard;
