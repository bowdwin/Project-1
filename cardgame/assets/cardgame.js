//queary selector for every card clicked and store in aCardSel
var aCardSel = $('.aCard');
console.log(aCardSel);
//boolean to know if the card was flipped
var wasflipped = false;
//varaibles that store first card clicked
var firstCard;
var secondCard;

//event listener when a card is clicked
$('.aCard').click(function (e) {
    // e.preventDefault();
    var cardFlipped
    console.log(this);
    //calls this flip card function and passes in the card that was clicked
    cardFlip(this);

});

//function called to flip card
function cardFlip(theCard) {
    console.log(theCard)
    //adds or removes flip class to aCard class
    $(theCard).toggleClass("flip")
}
