//used https://www.tutorialspoint.com/jquery/index.htm to help learn jquery animations//

$(document).ready(function() {
	//initial background color is black then user answers question and goes to starry background
	$('.sidenav').sidenav();

	var width = $('.container').width();

	//still editing//
	var groundPosition = '100px';

	//redship position
	var redshipTop = groundPosition;
	var redshipLeft = '400px';

	//fade in the background music//
	$('#audiolvl')[0].volume = 0;
	$('#audiolvl').animate({ volume: 0.2 }, 4000);

	$('body').css('background-color', 'black');

	//fading in the intro//
	$('#intro').fadeIn(4000).removeClass('hide');

	////-------ANIMATION BUTTON------//
	$('#button1').on('click', function(event) {
		$('.container').removeClass('valign-wrapper');
		let imageUrl = 'assets/img/stars.jpg';
		$('body').css('background', 'url(' + imageUrl + ')');
		$('body').css('background-size', 'cover');
		$('body').css('background-position', 'bottom');
		$('body').css('height', '100vh');
		$('#intro').fadeOut(500);

		setTimeout(function() {
			$('#intro').remove();
		}, 500);

		//Planets fade in and out
		$('#earth').fadeIn(6000).removeClass('hide');
		$('#mars').fadeIn(10000).removeClass('hide');
		$('#venus').fadeIn(7000).removeClass('hide');
		$('#neptune').fadeIn(7000).removeClass('hide');
		$('#navbarfade').fadeIn(8000).removeClass('hide');

		//unhide the first alien ship
		$('.spaceship').fadeIn(4000).removeClass('hide');

		$('#audiospaceship')[0].volume = 0;
		$('#audiospaceship')[0].play();
		$('#audiospaceship').animate({ volume: 0.5 }, 4000);

		setTimeout(goRight, 50);
	});

	//-------NO ANIMATION BUTTON------//
	$('#button2').on('click', function(event) {
		let imageUrl = 'assets/img/stars.jpg';
		$('body').css('background', 'url(' + imageUrl + ')');
		$('body').css('background-size', 'cover');
		$('body').css('background-position', 'bottom');
		$('body').css('height', '100vh');
		$('#intro').fadeOut(500);

		setTimeout(function() {
			$('#intro').remove();
			$('.container').removeClass('valign-wrapper');
		}, 500);

		//Planets fade in and out
		$('#earth').fadeIn(3000).removeClass('hide');
		$('#mars').fadeIn(10000).removeClass('hide');
		$('#venus').fadeIn(7000).removeClass('hide');
		$('#neptune').fadeIn(7000).removeClass('hide');
		$('#navbarfade').fadeIn(8000).removeClass('hide');
	});

	//explode when click blue alien ship
	$('#triggerspaceship').on('click', function(event) {
		//play the exlosion
		let explosionAudio = $('<Audio></Audio>');
		explosionAudio[0].src = 'assets/sounds/explosion.wav';
		explosionAudio[0].play();
		//stop audio for spaceship engine//
		$('#audiospaceship')[0].pause();
		//img explode plugin//

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

		//capture the poistion when space shipped is clicked//
		var left = $('#triggerspaceship')[0].style.left;
		var top = $('#triggerspaceship')[0].style.top;

		//creating the alien <img> and positioning based on the spaceship clicked poistion//
		var redAlien = $('<img id="red-alien"src="assets/img/red-alien.png" alt="red alien">');
		redAlien.css('left', left);
		redAlien.css('top', top);

		//adding the alien image onto the materialize container//
		$('.container').append(redAlien);

		//stops the animate from moving//
		$('#triggerspaceship').stop();

		//alien voice and delay//
		let redAlienAudio = $('<Audio></Audio>');
		redAlienAudio[0].src = 'assets/sounds/alienvoice.mp3';
		redAlienAudio[0].play();

		var redShip = $(
			'<img id="redspaceship"src="assets/img/redspaceship.png" alt="red spaceship" style = "left:800px; top:550px" > '
		);
		//drop the alien to the ground
		$('#red-alien').animate(
			{
				top: groundPosition
			},
			1500,
			function() {
				$('.container').append(redShip);
				$('#redspaceship')[0].play();
			}
		);

		$('#red-alien').animate(
			{
				left: '550px'
			},
			1500,
			function() {
				redAlien.remove();
				redShip.effect('shake', { direction: 'up', direction: 'down', times: 10, distance: 8 }, 3000);
				redShip.toggle('scale').delay(2000);
			}
		);

		//diable the click
		$('#triggerspaceship').off('click');
	});

	//bluespaceship movement//
	function goRight() {
		$('#triggerspaceship').animate(
			{
				left: width
			},
			5000,
			function() {
				setTimeout(goUp, 50);
			}
		);
	}
	function goLeft() {
		$('#triggerspaceship').animate(
			{
				left: 0
			},
			5000,
			function() {
				setTimeout(goDown, 50);
			}
		);
	}

	function goDown() {
		$('#triggerspaceship').animate(
			{
				top: '+=750px'
			},
			5000,
			function() {
				setTimeout(goRight, 50);
			}
		);
	}
	function goUp() {
		$('#triggerspaceship').animate(
			{
				top: '-=750px'
			},
			5000,
			function() {
				setTimeout(goLeft, 50);
			}
		);
	}
	//sets the lvl of background music//
}); ///this is the bottom of document ready
