//used https://www.tutorialspoint.com/jquery/index.htm to help learn jquery animations//

$(document).ready(function() {
	//initial background color is black then user answers question and goes to starry background
	var width = $('.container').width();
	//still editing//
	var groundPosition = '230px';

	//redship position
	var redshipTop = groundPosition;
	var redshipLeft = '400px';

	$('body').css('background-color', 'black');

	//fading in the intro//
	$('#intro').fadeIn(2000).removeClass('hide');

	////-------ANIMATION BUTTON------//
	$('#button1').on('click', function(event) {
		$('.container').removeClass('valign-wrapper');
		var imageUrl = 'practice-project1/assets/img/stars.jpg';
		$('body').css('background', 'url(' + imageUrl + ')');
		$('body').css('background-size', 'cover');
		$('body').css('background-position', 'bottom');
		$('body').css('height', '100vh');
		$('#intro').fadeOut(500);

		setTimeout(function() {
			$('#intro').remove();
		}, 500);

		//Planets fade in and out
		$('#earth').fadeIn(3000).removeClass('hide');
		$('#mars').fadeIn(10000).removeClass('hide');
		$('#venus').fadeIn(7000).removeClass('hide');
		$('#neptune').fadeIn(7000).removeClass('hide');

		//unhide the first alien ship
		$('.spaceship').fadeIn(3000).removeClass('hide');

		setTimeout(goRight, 50);
	});

	//-------NO ANIMATION BUTTON------//
	$('#button2').on('click', function(event) {
		var imageUrl = 'practice-project1/assets/img/stars.jpg';
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
	});

	//explode when click blue alien ship
	$('#triggerspaceship').on('click', function(event) {
		//img explode plugin//
		$('#explodeship').explodeRestore();
		//used to edit the animation, speed of explosion animation//
		$('#explodeship').explode({
			omitLastLine: false,
			radius: 80,
			minRadius: 20,
			release: true,
			fadeTime: 300,
			recycle: true,
			recycleDelay: 50,
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
		var redAlien = $('<img id="red-alien"src="practice-project1/assets/img/red-alien.png" alt="red alien">');
		redAlien.css('left', left);
		redAlien.css('top', top);

		//adding the alien image onto the materialize container//
		$('.container').append(redAlien);

		//stops the animate from moving//
		$('#triggerspaceship').stop();

		var redShip = $(
			'<img id="redspaceship"src="practice-project1/assets/img/redspaceship.png" alt="red spaceship" style = "left:800px; top:650px" > '
		);
		//drop the alien to the ground
		$('#red-alien').animate(
			{
				top: groundPosition
			},
			1500,
			function() {
				$('.container').append(redShip);
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

		//shake the alien
		//$('#red-alien').effect('shake', { direction: 'up', direction: 'down', times: 10, distance: 8 }, 3000);

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
}); ///this is the bottom of document ready
