//array of cards
//temporary array of pissible possible cards

//
//global varriables


var cards = [
    {
       rank:"queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png"
    },
    {
        rank:"queen",
        suit:"diamonds",
        cardImage: "images/queen-of-diamonds.png"
     },
     {
        rank:"king",
        suit:"hearts",
        cardImage:"images/king-of-hearts.png"
     },
     {
        rank:"king",
        suit:"diamonds",
        cardImage: "images/king-of-diamonds.png"
     }
];

var cardsInPlay = []

//when the varriable i is smaller than the lengths of elements in cards add one to i,
//



// when cardsinplay is equal in value , you log  " you found a match", otherwise log " sorry try again"
function checkForMatch (){

    if ( cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
};

function flipCard () {
    var cardId = this.getAttribute('card-Id');
    

    console.log("User flipped" + cards[cardId].rank)
    cardsInPlay.push (cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    console.log (cards[cardId].suit);
    console.log (cards[cardId].cardImage);
 //when there are 2 cards in play and they match faces , alert the user that they found a match
 //otherwise alert the user to try again
checkForMatch ();
}
   
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1] ) {
    
alert("You Found a match!");
}
else  { 
    (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1] )
alert("sorry,try again ! ");
}


        function createBoard() { 
            const cardTable = document.getElementById('game-board');
    for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      cardTable.appendChild(cardElement);
        }
  };
  
  createBoard();
