var cards = [
		{
			rank: 'queen',
			suit: 'hearts',
			img: "images/queen-of-hearts.png"
		},
		{
			rank: 'queen',
			suit: 'diamonds',
			img: "images/queen-of-diamonds.png"
		},
		{
			rank: 'king',
			suit: 'hearts',
			img: "images/king-of-hearts.png"
		},
		{
			rank: 'king',
			suit: 'diamonds',
			img: "images/king-of-diamonds.png"
		},
	];
var cardsInPlay = [];

var cardId = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");}
}

var flipCard = function (cardId) {
		console.log("User flipped " + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);
		cardsInPlay.push(cards[cardId].rank);
		
		
};


flipCard(0);
flipCard(2);

checkForMatch();


