var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");}
}

var flipCard = function (cardId) {
	console.log("User flipped " + cardId); 
	cardsInPlay.push(cardId);
	if (cardsInPlay.length === 2) {
		return checkForMatch()
	}
};

flipCard(cards[0]);
flipCard(cards[2]);



