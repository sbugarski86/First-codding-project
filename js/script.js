
	/*For the sticky navigation */
	$(document).ready(function() {


		$('.js--section-features').waypoint(
			function(direction) {
				if (direction == "down") {
					$('nav').addClass('sticky');
				} else {
					$('nav').removeClass('sticky');
				}
	  	},
			{
				offset: '80%'
			}
		);

		$('.js-carousel').carousel({
			interval: 3000,
			keyboard: true,
			pause: 'hover',
			wrap: true
		});

		$('#slider4').on('slide.bs.carousel', function () {
			console.log('SLIDE!');
		});

		$('#slider4').on('slid.bs.carousel', function () {
			console.log('SLID!');
		});

});
var nav = document.getElementsByClassName('nav-li');
var icon = document.querySelector('i');
icon.addEventListener('click', function(){
	for(var i = 0; i < nav.length; i++){
			nav[i].classList.toggle('visible')
		}
})
