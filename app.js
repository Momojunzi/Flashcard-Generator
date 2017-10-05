var inquirer = require('inquirer');
var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');
var fs = require('fs');


var start = function(){
	inquirer.prompt([
		{
			type:'list', 
			name: 'chooseAction',
			message:'Would you like to create a new flash card or view the existing flash cards?',
			choices: ['new card', 'view existing', 'exit app']
		}
	]).then(function(answers){
		if(answers.chooseAction === 'new card') {
			inquirer.prompt([
				{
					type:'list',
					name: 'cardType',
					message: 'Would you like to make a cloze card or a basic card?',
					choices: ['cloze card', 'basic card']
				},
				{
					type: 'input',
					name: 'front',
					message: 'Enter the text for the front of the card.'
				},
				{
					type: 'input',
					name: 'back', 
					message: 'enter the text for the back of the card.'
				}
			]).then(function(answers){
				addFlashCards(answers);
				start();
			});
		}
		if(answers.chooseAction === 'view existing') {
			var cardCount = 0;
			var sideCount = 1;
			var flashCards = fs.readFileSync('cards.txt', 'utf8');
			flashCardsArr = flashCards.split(',');
			flashCardsArr.pop();
			viewFlashCards(cardCount, sideCount, flashCardsArr);
		}
		if(answers.chooseAction === 'exit app') {
			console.log('Goodbye!');
		}
	});
}

var addFlashCards = function(sidesObj) {
	var card;
	if(sidesObj.cardType === 'cloze card'){
		card = new ClozeCard(sidesObj.front, sidesObj.back);
		fs.appendFile('cards.txt', card.clozeCreator(), 'utf8', function(err) {
			if (err) {
				console.log(err);
			}
		});
	}
	if(sidesObj.cardType === 'basic card'){
		card = new BasicCard(sidesObj.front, sidesObj.back);
		fs.appendFile('cards.txt', card.basicCreator(), 'utf8', function(err) {
			if (err) {
				console.log(err);
			}
		});
	}
	console.log('New Flash Card added.');
}

var viewFlashCards = function(cardCount, sideCount, finalCardArr){
	if (cardCount < finalCardArr.length) {
		inquirer.prompt([
			{
				type:'list',
				message: finalCardArr[cardCount],
				name:'frontCard',
				choices:['flip card']
			}
		]).then(function(answers){
			inquirer.prompt([
				{
					type: 'list',
					message: finalCardArr[sideCount],
					name: 'backCard',
					choices:['next card']
				}
			]).then(function(answers){
				cardCount += 2;
				sideCount += 2;
				viewFlashCards(cardCount, sideCount, finalCardArr);
			});
		});
	}else {
		start();
	}
}

start();