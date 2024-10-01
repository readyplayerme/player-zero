export default function createDOM(selector = '[data-elt]', multiple = '[data-elts]') {
	/*
	// hash map version
	const DOM = new Map();
	[...document.querySelectorAll(selector)].forEach((elt, i) => {
		DOM.set(elt.dataset.dom, elt);
	});
	*/

	const DOM = {};

	[...document.querySelectorAll(multiple)].forEach((elt, i) => {
		let arr = elt.dataset.elts.split(' ');

		arr.forEach(function(item, index, array) {
			if (DOM[item]) {
				DOM[item].push(elt);
			} else {
				DOM[item] = [elt];
			}
		});
	});

	[...document.querySelectorAll(selector)].forEach((elt, i) => {
		let arr = elt.dataset.elt.split(' ');

		arr.forEach(function(item, index, array) {
			DOM[item] = elt;
		});
	});
	
	return DOM;
}
