export default class Countdown {
	constructor(el) {
		this.countdown = el
		this.countdownDays  		= this.countdown.querySelector('[data-elt="countdownDays"]')
		this.countdownHours 		= this.countdown.querySelector('[data-elt="countdownHours"]')
		this.countdownMinutes 		= this.countdown.querySelector('[data-elt="countdownMinutes"]')
		this.countdownSeconds 		= this.countdown.querySelector('[data-elt="countdownSeconds"]')
		this.countdownDaysLabel 	= this.countdown.querySelector('[data-elt="countdownDaysLabel"]')
		this.countdownHoursLabel 	= this.countdown.querySelector('[data-elt="countdownHoursLabel"]')
		this.countdownMinutesLabel 	= this.countdown.querySelector('[data-elt="countdownMinutesLabel"]')
		this.countdownSecondsLabel 	= this.countdown.querySelector('[data-elt="countdownSecondsLabel"]')

		this.isVisible = false;
		this.deadline = new Date(this.countdown.getAttribute('data-time') * 1000)

		this.second = 1000,
		this.minute = this.second * 60,
		this.hour 	= this.minute * 60,
		this.day 	= this.hour * 24

        this.init();
	}

	init() {
		this.updateClock();
		this.timeinterval = setInterval(this.updateClock.bind(this), 1000);
	}

	declination(number, titles) { 
		// titles = ['секунда', 'секунды', 'секунд']
		let cases = [2, 0, 1, 1, 1, 2]; 
		return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]; 
	}

	updateClock() {
		let t = this.getTimeRemaining(this.deadline);

		if (t.total > 0) {
			this.show()
		} else {
			this.hide()
	    }

		this.countdownDays.innerHTML 	= (t.days.toString().length == 1 ? '0' : '') + t.days;
		this.countdownHours.innerHTML 	= (t.hours.toString().length == 1 ? '0' : '') + t.hours;
		this.countdownMinutes.innerHTML = (t.minutes.toString().length == 1 ? '0' : '') + t.minutes;
		this.countdownSeconds.innerHTML = (t.seconds.toString().length == 1 ? '0' : '') + t.seconds;

		this.countdownDaysLabel.innerHTML	 = this.declination(t.days,    ['day', 'days', 'days'])
		this.countdownHoursLabel.innerHTML	 = this.declination(t.hours,   ['hour', 'hours', 'hours'])
		this.countdownMinutesLabel.innerHTML = this.declination(t.minutes, ['minute', 'minutes', 'minutes'])
		this.countdownSecondsLabel.innerHTML = this.declination(t.seconds, ['second', 'seconds', 'seconds'])
	}

	show() {
		if (this.isVisible) {
			return;
		}

		this.isVisible = true;

		this.countdown.classList.add('is-active')
	}

	hide() {
		if (!this.isVisible) {
			return;
		}

		this.isVisible = false;
		this.countdown.classList.remove('is-active')
		this.stop()
	}

	stop() {
	  	clearInterval(this.timeinterval);
	}


   	getTimeRemaining(endtime) {
   		let now = new Date().getTime(),
   			total = this.deadline - now

   		let days 	= Math.abs(Math.floor(total /  (this.day))),
   			hours 	= Math.abs(Math.floor((total % (this.day)) 	 	/ this.hour)),
   			minutes = Math.abs(Math.floor((total % (this.hour)) 	/ this.minute)),
   			seconds = Math.abs(Math.floor((total % (this.minute)) 	/ this.second))

		return {
			'total': total,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}
}
