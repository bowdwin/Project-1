//used https://www.tutorialspoint.com/jquery/index.htm to help learn jquery animations//

$(document).ready(function() {
	//ACTIVATE THE SIDE NAV FOR MOBILE MODE//
	$('.sidenav').sidenav();

	//W3schools//
	var isMobile = window.matchMedia('(max-width: 767px)');

	if (isMobile.matches) {
		disableAnimation();
	} else {
		//INITIAL BACKGROUND COLOR IS BLACK FOR ANIMATION QUESTIONS
		// FADE IN BACKGROUND MUSIC//
		$('#audiolvl')[0].volume = 0;
		$('#audiolvl').animate({ volume: 0.2 }, 4000);
		$('body').css('background-color', 'black');
	}

	//FADE IN THE QUESTION INRO//
	$('#intro').fadeIn(4000).removeClass('hide');

	////-------ANIMATION BUTTON------//
	$('#button1').on('click', function(event) {
		//calltranition to abckgorund fucntion
		transitionToStarryBackground();

		//materialize modal function//
		$('.modal').modal();
		$('#modal1').modal('open');

		//Planets fade in //
		fadeInPlanets();

		//position the blue spacehip on the botttom right of the container
		$('.spaceship').css('left', $('body').width() - 400 + 'px');
		$('.spaceship').css('top', $('body').height() - 400 + 'px');

		//unhide and fade in blue spacehip
		$('.spaceship').fadeIn(2000).removeClass('hide');

		//play engine sound of the blue space ship
		$('#audiospaceship')[0].volume = 0;
		$('#audiospaceship')[0].play();
		$('#audiospaceship').animate({ volume: 0.5 }, 4000);

		//start movifn the blue ship up
		setTimeout(goUp, 50);
	});

	//-------NO ANIMATION BUTTON------//
	$('#button2').on('click', function(event) {
		//transition to background function
		disableAnimation();
	});

	//explode when click blue alien ship
	$('.spaceship').on('click', function(event) {
		triggerExplosion();

		//diable the click
		$('.spaceship').off('click');

		//capture the poistion when space shipped is clicked//
		var left = $('.spaceship')[0].style.left;
		var top = $('.spaceship')[0].style.top;

		//creating the alien <img> and positioning based on the spaceship clicked poistion//
		var redAlien = $('<img id="red-alien"src="assets/img/red-alien.png" alt="red alien">');
		redAlien.css('left', left);
		redAlien.css('top', top);

		//adding the alien image onto the materialize container//
		$('.container').append(redAlien);

		//stops the animate from moving//
		$('.spaceship').stop();

		//alien voice and delay//
		let redAlienAudio = $('<Audio></Audio>');
		redAlienAudio[0].src = 'assets/sounds/alienvoice.mp3';
		redAlienAudio[0].play();

		//create the redship element
		var redShip = $('<img id="redspaceship"src="assets/img/redspaceship.png"> ');

		//position the spaceship in the bottom middle of the container
		redShip.css('left', $('.container').width() / 2);
		redShip.css('top', $('.container').height());

		//drop the alien to the ground
		$('#red-alien').animate(
			{
				top: $('.container').height() + 50
			},
			2000,
			function() {
				$('.container').append(redShip);
				$('#redspaceship')[0].play();
			}
		);

		//move the alien to the ship
		$('#red-alien').animate(
			{
				left: $('.container').width() / 2 + 35
			},
			1500,
			function() {
				//push the alien into the ship and zoom out the ship
				redAlien.remove();
				redShip.effect('shake', { direction: 'up', direction: 'down', times: 10, distance: 8 }, 3000);
				redShip.toggle('scale').delay(2000);
			}
		);
	});

	//function for starry background
	function transitionToStarryBackground() {
		$('.container').removeClass('valign-wrapper');
		let imageUrl = 'assets/img/stars.jpg';
		$('body').css('background', 'url(' + imageUrl + ')');
		$('body').css('background-size', 'cover');
		$('body').css('background-position', 'bottom');
		$('body').css('height', '100vh');
		$('#intro').remove();
	}

	//fucntion to fade in the planets
	function fadeInPlanets() {
		$('#earth').fadeIn(6000).removeClass('hide');
		$('#mars').fadeIn(10000).removeClass('hide');
		$('#venus').fadeIn(7000).removeClass('hide');
		$('#neptune').fadeIn(7000).removeClass('hide');
		$('#navbarfade').fadeIn(8000).removeClass('hide');
	}

	//function to explode the ship
	function triggerExplosion() {
		let explosionAudio = $('<Audio></Audio>');
		explosionAudio[0].src = 'assets/sounds/explosion.wav';
		explosionAudio[0].play();
		//stop audio for spaceship engine//
		$('#audiospaceship')[0].pause();

		//used to edit the animation, speed of explosion animation//
		$('#explodeship').explode({
			omitLastLine: false,
			radius: 80,
			minRadius: 20,
			release: true,
			fadeTime: 300,
			recycle: true,
			recycleDelay: 10,
			fill: true,
			explodeTime: 300,
			maxAngle: 360,
			gravity: 0,
			round: false,
			groundDistance: 400,
			ignoreCompelete: false,
			land: true
		});
	}

	function disableAnimation() {
		transitionToStarryBackground();

		setTimeout(function() {
			$('#intro').remove();
			$('.container').removeClass('valign-wrapper');
		}, 500);

		//Planets fade in//
		fadeInPlanets();
		$('#audiolvl1')[0].remove();
	}

	//bluespaceship movement//
	function goRight() {
		$('.spaceship').animate(
			{
				left: $('body').width() - 400
			},
			5000,
			function() {
				setTimeout(goUp, 50);
			}
		);
	}
	function goLeft(x) {
		$('.spaceship').animate(
			{
				left: 100
			},
			5000,
			function() {
				setTimeout(goDown, 50);
			}
		);
	}

	function goDown() {
		$('.spaceship').animate(
			{
				top: $('body').height() - 400
			},
			5000,
			function() {
				setTimeout(goRight, 50);
			}
		);
	}
	function goUp() {
		$('.spaceship').animate(
			{
				top: 100
			},
			5000,
			function() {
				setTimeout(goLeft, 50);
			}
		);
	}
}); ///this is the bottom of document ready
