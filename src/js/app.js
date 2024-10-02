import createDOM from './app/utils/createDOM';
import Popup from './app/Popup';
import FormFactory, { formDataToObject } from './app/Form.js';
import HeaderToggle from './app/HeaderToggle';
import Cookies from 'js-cookie';

class App {
    constructor() {
        this.DOM = createDOM();
        this.body = this.DOM.body;
        this.scroll = window.scrollY;
        this.vh = 0;

        this.popup = new Popup(this.DOM);
        this.headerToggle = new HeaderToggle(this.DOM.header);

        this.forms = FormFactory([{
			form: '#subscribe-intro',
			constraints: {
				email: {
					presence: true,
					email: true
				}
			}
		}, {
            form: '#subscribe-footer',
			constraints: {
				email: {
					presence: true,
					email: true
				}
			}
		}]);

        this.cookiesController();

        this.init();
		this.addEvents();
    }

    cookiesController = () => {
		const state = +Cookies.get('cookiesAccepted');

		if (!this.DOM.cookies || state === 1) {
            console.log('this.DOM.cookies', this.DOM.cookies);
			return;
		}

		this.DOM.cookies.classList.add('is-open');

		this.DOM.acceptCookies?.addEventListener('click', (event) => {
			let date = new Date();

			Cookies.set('cookiesAccepted', 1, {
				expires: new Date(date.setDate(date.getDate() + 30))
			});

			this.DOM.cookies.classList.remove('is-open');
			//event.preventDefault();
			return false;
		});

		this.DOM.closeCookies?.addEventListener('click', (event) => {
			//Cookies.set('cookiesAccepted', 1);
			//event.preventDefault();
			this.DOM.cookies.classList.remove('is-open');
			return false;
		});
	}

    init = () => {
        /* this.setVh();
		this.setBaseFontSize(); */

		setTimeout(() => {
            this.setHeaderScrollClass(this.scroll);
        }, 50);
    }

    addEvents = () => {
		document.addEventListener('click', this.handleDocumentClick);
		window.addEventListener('resize', this.handleResizeEvent);
		window.addEventListener('load', this.handleLoadEvent);
		window.addEventListener('scroll', this.handleScrollEvent, { passive: true });

        this.DOM.scrollLink?.forEach((el, i) => {
			el.addEventListener('click', (e) => {
				let link = el.getAttribute('href');

				if (link.includes('/') && link.includes('#')) {}

				if (link.includes('#')) {
					e.preventDefault();
					this.smoothScroll(el);
					console.log('el', el);
					el.classList.add('is-active');
	
					this.DOM.scrollLink.forEach((otherEl) => {
						if (otherEl !== el) {
							otherEl.classList.remove('is-active');
						}
					});
					return false;
				}

			});
		});
    }

    handleScrollEvent = (e) => {
        this.scroll = window.scrollY;
        this.headerToggle.toggle(this.scroll);

        setTimeout(() => {
            this.setHeaderScrollClass(this.scroll);
        }, 100);
    }

    handleResizeEvent = (e) => {
		this.setVh();
		this.setBaseFontSize();
    }

    handleLoadEvent = (e) => {
		this.body.classList.add('is-init');
    }

    setVh() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	smoothScroll = (link) => {
		let targetId = link.getAttribute('href');

		const elt = document.querySelector(targetId.replace(/\//g, ''));

		elt?.scrollIntoView({ block: "start", behavior: "smooth" });
	}

	setBaseFontSize = () => {
		let baseFontSize = Math.max(window.innerWidth / 1920, 1);
		document.documentElement.style.setProperty('--scale', `${baseFontSize}px`);
	}

    setHeaderScrollClass = (scroll) => {
        let offset = 0;
        this.DOM.header.classList.toggle('is-scroll', scroll > offset);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new App();
})