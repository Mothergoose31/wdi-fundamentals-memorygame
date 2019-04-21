//array of cards
//temporary array of pissible possible cards

//


var cards = ["queen","queen","king","king"]

var cardsInPlay = []

function checkForMatch (){

    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
};

function flipCard (cardId){

    console.log("User flipped" + cards[cardId])
    cardsInPlay.push (cards[cardId]);
 
checkForMatch ();
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1] ) {
    
alert("You Found a match!");
}
else  { 
    (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1] )
alert("sorry,try again ! ");
}
};
flipCard (0);
flipCard (2);
