var cardOne = "queen";

var cardTwo = "king";

var cards = [cardOne, "queen", cardTwo, "king"];

var cardsInPlay = [];

cardsInPlay.push(cardOne);

cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	console.log("User flipped " + cardsInPlay[0]); console.log("User flipped " + cardsInPlay[1]); 
	if (cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");
} else {alert("Sorry, try again.");}
}



