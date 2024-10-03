import getQuery from './utils/getQuery.js';
import { overflow } from './utils/overflow.js';

export default class Popup {
	constructor(DOM, options = {}) {
		this.DOM = DOM;
		this.query = getQuery();
		this.onClose = options.onClose || (() => {});

		this.popupOpenControls  = [...document.querySelectorAll('[data-elts~="popupBtn"]')];
		this.popupCloseControls = [...document.querySelectorAll('[data-elts~="closePopup"]')];
		this.popups = [...document.querySelectorAll('[data-elts~="popup"][data-popup]')];

		this.openedPopups = [];

		document.body.addEventListener('click', (event) => {
			const open = event.target.closest('[data-elts~="popupBtn"]');

			if (open) {
				event.preventDefault();
			    this.open(open.dataset.popup);
			}

			const close = event.target.closest('[data-elts~="closePopup"]');

			if (close) {
				event.preventDefault();
				this.closeAll();
			}
		})

		if (this.query.popup) {
			this.open(this.query.popup);
		}
	}

	removeListener = (elt) => {
		elt.removeAttribute('data-popup');
		elt.removeAttribute('data-elts');
		console.log('removeListener', elt);
	}

	open = (id) => {
		const currentOpenedPopups = this.popups.filter(p => {
			const opened = p.classList.contains('is-open');
			opened && p.style.setProperty('z-index', 90);
			return opened;
		});

		setTimeout(() => {
			currentOpenedPopups.map(p => {
				this.close(p.dataset.popup);
			})
		}, 300);

		this.popups.forEach((popupElt) => {
			const open = popupElt.dataset.popup === id;
			if (open) {
				popupElt.classList.add('is-open');
				this.openedPopups.push(id);
				overflow.on();

				if(id === 'certificates') {
					this.DOM.body.classList.add('is-certificates-open');
					overflow.off();
				}
			}
		});
	}

	close = (id) => {
		this.popups.forEach((popupElt) => {
			if (popupElt.dataset.popup === id) {
				popupElt.classList.remove('is-open');
				this.onClose(popupElt);
				setTimeout(() => {
					popupElt.style.removeProperty('z-index');
				}, 200);
				this.DOM.body?.classList.remove('is-settings-open');
				this.DOM.body?.classList.remove('is-inventory-open');
				this.DOM.body?.classList.remove('is-certificates-open');
				overflow.off();
			}
		});
	}

	closeAll = () => {
		this.popups.forEach((popupElt) => {
			popupElt.classList.remove('is-open');
			this.DOM.body?.classList.remove('is-settings-open');
			this.DOM.body?.classList.remove('is-inventory-open');
			this.DOM.body?.classList.remove('is-certificates-open');
			popupElt.style.removeProperty('z-index');
			
			setTimeout(() => {
				overflow.off();
			}, 200);
		})

		this.onClose();
	}
}