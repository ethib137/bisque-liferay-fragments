if (!window.__carousel_jumbotron_registered) {
	$(document).on(
		'click',
		'.fragment-carousel-jumbotron .play-pause',
		function(event) {
			console.log(event);

			var carousel = $('.fragment-carousel-jumbotron .carousel');

			var pause = $(event.currentTarget);

			if (pause.hasClass('paused')) {
				console.log('play');
				carousel.carousel('next');
				carousel.carousel('cycle');
			} else {
				console.log('pause');
				carousel.carousel('pause');
			}

			pause.toggleClass('paused');
		}
	);
}

window.__carousel_jumbotron_registered = true;