
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

});
var nav = document.getElementsByClassName('nav-li');
var icon = document.querySelector('i');
icon.addEventListener('click', function(){
	for(var i = 0; i < nav.length; i++){
			nav[i].classList.toggle('visible');
		}
})
