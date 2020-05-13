//queary selector for every card clicked and store in aCardSel

$(document).ready(function () {
    var aCardSel = $('.aCard');

    //     var matchEl = $('#match');
    //     var flipEl = ($('#flip').text());
    // $('.flipEl').id


    // let card = document.querySelectorAll(".aCard");
    let cards = [];
    // function to convert a nodelist to array from https://stackoverflow.com/questions/3199588/fastest-way-to-convert-javascript-nodelist-to-array
    for (var i = aCardSel.length; i--; cards.unshift(aCardSel[i]));
    console.log(aCardSel);
    var deck = document.querySelector('.planet-game');

    //Call the startGame function to start the game and shuffle cards
    window.onload = startGame();
    //boolean to know if the card was flipped
    var wasflipped = false;
    //varaibles that store first card clicked
    var firstCard;
    var secondCard;
    var matchScore = 0;
    var flips = 0;

    var freezeScreen = false;

    // });
    $(aCardSel).on("click", function () {
        console.log($(this).text());
        cardFlip(this);

    });

    //shuffle cards
    function startGame() {
        // console.log(flipEl);
        shuffle(cards).forEach(function (item) {
            deck.appendChild(item);
        });
    }


    // Shuffle function from http://stackoverflow.com/a/2450976
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    //function called to flip card
    function cardFlip(theCard) {
        addToFlips();
        console.log(theCard)
        //adds or removes flip class to aCard class
        if (freezeScreen === true) return;
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

            // console.log($(flipEl).text(flips));
            // check if first card data attr matches 2nd card

            if (firstCard.getAttribute('data-cardatt') === secondCard.getAttribute('data-cardatt')) {

                matchScore++;
                flips++;
                console.log(matchScore + " matchscore")
                console.log(flips + " flips")

                // $('#match').replaceWith(matchScore);
                // console.log($.('#flips').value();)
                // console.log(matchesEl.text());
                // console.log(matchesEl.text());
                // matchesEl

                console.log(matchScore)
                // console.log(matchesEl.val());
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
                // flips++;
                // $('#flips').html() = flips;
                // document.getElementById('flips').innerHTML = flips;
                // console.log(flips + " flips")

                // $('#flips').replaceWith(flips);
                //set a timer of 2 seconds to see the card flip back and remove the class flip from the cards
                freezeScreen = true;
                setTimeout(() => {
                    $(firstCard).removeClass('flip');
                    $(secondCard).removeClass('flip');
                    // firstCard = null;
                    // secondCard = null;
                    //prevents user from clicking more than two
                    freezeScreen = false;
                }, 1500);
            }

        }
        //check if cards match by checking attribute on card
        console.log($(firstCard));


    }
    // console.log(firstCard.$());
    // if (firstCard.attr)
    function addToFlips() {
        flips++;
        document.getElementById('flips').innerHTML = flips;
    }
    //resets game
    function resetGame() {

        firstCard = null;
        secondCard = null;
        freezeScreen = false;
        wasflipped = false;


    }


    function cardMatch() {

    }

    function cardNonMatch() {

    }
    function updateScore() {

    }
});
// function shuffleCards() {

//     console.log(arrayCards);
// }