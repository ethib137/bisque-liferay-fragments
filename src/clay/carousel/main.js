var carousel = $('.fragment-carousel .carousel');

console.log(window, carousel);

if (!window.__carousel_registered) {
	$(document).on(
		'click',
		'.fragment-carousel .play-pause',
		function(event) {
			console.log(event);

			var pause = $(event.currentTarget);

			if (pause.hasClass('paused')) {
				carousel.carousel('next');
				carousel.carousel('cycle');
			} else {
				carousel.carousel('pause');
			}

			pause.toggleClass('paused');
		}
	);
}

window.__carousel_registered = true;