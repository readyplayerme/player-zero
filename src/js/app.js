import createDOM from './app/utils/createDOM';
import { overflow } from './app/utils/overflow.js';
import Popup from './app/Popup';
import FormFactory, { formDataToObject } from './app/Form.js';
import HeaderToggle from './app/HeaderToggle';
import Cookies from 'js-cookie';
import Accordion from './app/Accordion';

class App {
	constructor() {
		this.DOM = createDOM();
		this.body = this.DOM.body;
		this.scroll = window.scrollY;
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.isMobile = this.width < 1024;

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
		this.accordion = new Accordion();

		this.init();
		this.addEvents();
	}


	cookiesController = () => {
		const state = +Cookies.get('cookiesAccepted');

		if (!this.DOM.cookies || state === 1) {
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
		const countdownDate = new Date("October 8, 2024 17:00:00").getTime();
		const leadingZero = (v) => v < 10 ? '0' + v.toString() : v;
		const count = () => {
			const now = new Date().getTime(); // Текущее время
			const timeRemaining = countdownDate - now; // Оставшееся время

			const totalHours = Math.floor(timeRemaining / (1000 * 60 * 60)); // Общее количество часов
			const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

			this.DOM.hours.innerText = leadingZero(totalHours);
			this.DOM.mins.innerText = leadingZero(minutes);
			this.DOM.secs.innerText = leadingZero(seconds);

			// Если время истекло
			if (timeRemaining < 0) {
				clearInterval(updateTimer);
				console.log("Время вышло!");
			}
		}
		
		// const updateTimer = setInterval(count, 1000); // set interval
		// count(); // instant set timer

		setTimeout(() => {
			this.setHeaderScrollClass(this.scroll);
		}, 50);
	}

	addEvents = () => {
		document.addEventListener('click', this.handleDocumentClick);
		window.addEventListener('resize', this.handleResizeEvent);
		window.addEventListener('load', this.handleLoadEvent);
		window.addEventListener('scroll', this.handleScrollEvent, { passive: true });

		this.DOM.showFormAnim.addEventListener('click', () => {
			this.DOM.formAnim.classList.toggle('is-open');
		})

		this.DOM.navToggle?.addEventListener('click', (event) => {
			this.toggleNav(this.body);
		});

		window.addEventListener('resizle', () => {
			this.isMobile = this.width < 1024;
		});

		this.DOM.scrollLink?.forEach((el, i) => {
			el.addEventListener('click', (e) => {
				let link = el.getAttribute('href');

				if (link.includes('/') && link.includes('#')) { }

				if (link.includes('#')) {
					e.preventDefault();
					this.smoothScroll(el);
					el.classList.add('is-active');

					this.DOM.scrollLink.forEach((otherEl) => {
						if (otherEl !== el) {
							otherEl.classList.remove('is-active');
						}
					});

					if (this.isMobile) {
						this.body.classList.remove('is-nav-open');
						overflow.off();
					}
					return false;
				}
			});
		});

		this.DOM.accordionBtn?.forEach((el) => {
			el.addEventListener('click', (e) => {
				let el = e.target.closest('[data-elts ~= "accordionBtn"]'),
					blockCurrent = el.closest('[data-elts ~= "accordion"]'),
					box = el.closest('[data-elts ~= "accordionBox"]'),
					blocks = box.querySelectorAll('[data-elts ~= "accordion"]');

				if (!blockCurrent.classList.contains('is-open')) {
					blocks.forEach((block) => {
						this.accordion.close(block);
					});

					this.accordion.open(blockCurrent);

				} else {
					blocks.forEach((block) => {
						this.accordion.close(block);
					});
				}
			})
		});
	}

	handleScrollEvent = (e) => {
		this.scroll = window.scrollY;
		this.headerToggle.toggle(this.scroll);

		this.setHeaderScrollClass(this.scroll);
	}

	handleResizeEvent = (e) => {
		this.setVh();
		this.setBaseFontSize();

		this.DOM.accordion?.forEach((el) => {
			this.accordion.setDefaultHeight(el);
		});
	}

	handleLoadEvent = (e) => {
		this.body.classList.add('is-init');

		this.DOM.accordion?.forEach((el) => {
			this.accordion.setDefaultHeight(el);
		});
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

	toggleNav = (body) => {
		if (!body.classList.contains('is-nav-open')) {
			body.classList.add('is-nav-open');
			overflow.on();
		} else {
			body.classList.remove('is-nav-open');
			overflow.off();
		}
	}
}

window.addEventListener('DOMContentLoaded', () => {
	new App();
})