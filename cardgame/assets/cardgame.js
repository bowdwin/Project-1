//queary selector for every card clicked and store in aCardSel
$(document).ready(function () {
    //nav bar for mobile view js
    $(".dropdown-trigger").dropdown();
    $(".sidenav").sidenav();
    var cardFlipSound = false;
    var aCardSel = $('.aCard');
    var restartButEl = $('#restartbtn');

    $('#restartbtn').on('click', function (event) {
        event.preventDefault();
        resetGame();
    });

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
    var cardsMatchedArray = [];

    $(aCardSel).on("click", function () {
        cardFlip(this);
    });

    //shuffle cards
    function startGame() {
        gameSound();
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
        gameSound();
        addToFlips();
        cardSound();

        console.log(theCard)
        //adds or removes flip class to aCard class
        if (freezeScreen === true) return;
        $(theCard).toggleClass('flip')

        if (wasflipped === false) {
            //set card flipped to true
            wasflipped = true;
            //store card info in first card
            firstCard = theCard;
        }
        else {
            wasflipped = false;
            secondCard = theCard;
            // check if first card data attr matches 2nd card
            if (firstCard.getAttribute('data-cardatt') === secondCard.getAttribute('data-cardatt')) {
                addToMatches();
                cardsMatchedArray.push(firstCard, secondCard);
                $(firstCard).off('click');
                $(secondCard).off('click');
            }
            else {
                errorSound();
                freezeScreen = true;
                setTimeout(() => {
                    //removes the flip class from the first and 2nd card and flips the cards back over
                    $(firstCard).removeClass('flip');
                    $(secondCard).removeClass('flip');
                    freezeScreen = false;
                }, 1500);
            }

        }
        //check if cards match by checking attribute on card
        console.log($(firstCard));


    }
    //increment flips counter
    function addToFlips() {
        flips++;
        document.getElementById('flips').innerHTML = flips;
    }
    function addToMatches() {
        matchScore++;
        matchSound();
        document.getElementById('match').innerHTML = matchScore;
        if (matchScore === aCardSel.length) {
        }
    }
    //resets game to be used and coded in when more time
    function resetGame() {
        location.reload();
    }
    //to be used in future update
    // function endGame() {

    // }
    //plays card sound when flipped
    function cardSound() {
        var cardSound = new Audio("./assets/sounds/caradflip.wav");
        cardSound.volume = .3;
        cardSound.play();
    }
    //plays background sound
    function gameSound() {
        var gameSound = new Audio("./assets/sounds/pagesound.mp3");
        gameSound.volume = .1;
        gameSound.play();
    }
    //pays error song when wrong two cards flipped
    function errorSound() {
        var error = new Audio("./assets/sounds/wrong.wav");
        error.volume = .3;
        error.play();
    }
    //plays match sound
    function matchSound() {
        var errorSound = new Audio("./assets/sounds/ding.wav");
        errorSound.volume = .7;
        errorSound.play();
    }

    $(document).ready(function () {
        $('.modal').modal();
    });
});