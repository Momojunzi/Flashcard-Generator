

var ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;
	this.partial; 
	this.card;
};

ClozeCard.prototype.clozeCreator = function() {
	if(this.fullText.indexOf(this.cloze) === -1) {
		console.log("an error has occurred. '" + this.cloze + "' is not found in '" + this.fullText+ "'.");
	}else{
		this.partial = this.fullText.replace(this.cloze, "...");
		this.card = this.partial + "," + this.cloze + ",";
		return this.card;
	}
}

module.exports = ClozeCard;