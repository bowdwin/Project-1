//queary selector for every card clicked and store in aCardSel
var aCardSel = $('.aCard');
console.log(aCardSel);
//boolean to know if the card was flipped
var wasflipped = false;
//varaibles that store first card clicked
var firstCard;
var secondCard;
var matchScore = 0;

var freezeScreen = false;

// });
$(aCardSel).on("click", function () {
    console.log($(this).text());
    cardFlip(this);

});

//function called to flip card
function cardFlip(theCard) {
    if (freezeScreen === true) return;
    console.log(theCard)
    //adds or removes flip class to aCard class
    $(theCard).toggleClass('flip')

    if (wasflipped === false) {
        //set card flipped to true
        wasflipped = true;
        //store card info in first card
        firstCard = theCard;
        // console.log(firstCard, wasflipped);


    }
    else {
        wasflipped = false;
        secondCard = theCard;
        // check if first card data attr matches 2nd card
        if (firstCard.getAttribute('data-cardatt') === secondCard.getAttribute('data-cardatt')) {
            matchScore++;
            console.log(matchScore)
            console.log(' card att match')
            cardMatch();
            //remove and event listener of card if matched
            $(firstCard).off('click');
            $(secondCard).off('click');

            console.log(firstCard, " first card in if ")
            console.log(secondCard, " first card in if ")
            // firstCard = null;
            // secondCard = null;
        }
        else {
            //set a timer of 2 seconds to see the card flip back and remove the class flip from the cards
            freezeScreen = true;
            setTimeout(() => {
                $(firstCard).removeClass('flip');
                $(secondCard).removeClass('flip');
                // firstCard = null;
                // secondCard = null;
                freezeScreen = false;
            }, 1000);
        }

    }
    //check if cards match by checking attribute on card
    console.log($(firstCard));


}
// console.log(firstCard.$());
// if (firstCard.attr)

function cardMatch() {

}

function cardNonMatch() {

}
function updateScore() {

}
function randomCardPlacement() {

}

function freezeBoard() {

}