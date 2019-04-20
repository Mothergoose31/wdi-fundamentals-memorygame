//array of cards
//temporary array of pissible possible cards

//


var cards = ["queen","queen","king","king"]

var cardsInPlay = []

var cardOne = cards[0];
var cardTwo = cards[2];


cardsInPlay.push (cardOne , cardTwo );

console.log ("user flipped Queen.");
console.log ("User flipped King.");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1] ) {
 

alert("You Found a match!");
}
else  { 
    (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1] )
alert("sorry,try again ! ")
}




