
(function(){
	let baseFontSize = Math.max(window.innerWidth / 1920, 1);
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--scale', `${1}px`);
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	const fontLoadEvent = setInterval(() => {
		const DrukCond = document.fonts.check('12px Druk XCond Trial');
		const DrukWide = document.fonts.check('12px Druk Wide Web');
		const Aeonik = document.fonts.check('12px Aeonik');

		if (DrukCond && DrukWide && Aeonik && document.body) {
			document.body.classList.remove('is-loading');
			clearInterval(fontLoadEvent);
		}
	}, 100);
})()
