

var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial; 
};

ClozeCard.prototype.clozeCreator = function() {
	if(this.fullText.indexOf(this.cloze) === -1) {
		console.log("an error has occurred. '" + this.cloze + "' is not found in '" + this.fullText+ "'.");
	}else{
		this.partial = this.fullText.replace(this.cloze, "...");
		console.log(this.partial);
	}
}

//test variables for ClozeCard 
var testCloze = new ClozeCard("I like to eat mushrooms", "mushrooms");
testCloze.clozeCreator();
var testError = new ClozeCard("I like mushrooms", "carrots");
testError.clozeCreator();

module.exports = ClozeCard;