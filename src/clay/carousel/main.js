var carousel = $('.carousel');

console.log(window);

if (!window.__carousel_registered) {
	$(fragmentElement).on(
		'click',
		'.play-pause', {},
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
