

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
	this.card;
};

BasicCard.prototype.basicCreator = function(){
	this.card = this.front + "," + this.back + ",";
	return this.card;
}

module.exports = BasicCard;