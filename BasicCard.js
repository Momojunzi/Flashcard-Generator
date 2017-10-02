

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}


// test variables for BasicCard
var testBasic = new BasicCard("this is the front", "this is the back");

console.log(testBasic.front, testBasic.back);

module.exports = BasicCard;