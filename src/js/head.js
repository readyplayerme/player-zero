
(function(){
	let baseFontSize = Math.max(window.innerWidth / 1920, 1);
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--scale', `${baseFontSize}px`);
	document.documentElement.style.setProperty('--vh', `${vh}px`);
})()
