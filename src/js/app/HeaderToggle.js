class HeaderToggle {
	constructor(header, {
		toggleClassName = 'is-active',
		offset = 80,
		minScroll = 150
	} = {}) {
		if (!header) {
			console.error('No header DOM element provided');
			return false;
		}

		this.header 	= Array.isArray(header) ? header : [header];

		console.log('this.header', this.header);

		this.toggleClassName = toggleClassName;
		this.offset 	= offset;
		this.minScroll 	= minScroll;

		this.state = {
			headerVisible: false,
			headerPrevVisible: false,
			headerPrevScroll: 0,
		};
	}

	toggle = (scroll, forceState) => {
		if (scroll < this.minScroll) {
			this.state.headerPrevVisible = true;
		}

		if (scroll - this.state.headerPrevScroll > this.offset) {
			this.state.headerPrevVisible = false;
			this.state.headerPrevScroll = scroll;
		}

		if (scroll - this.state.headerPrevScroll < -this.offset) {
			this.state.headerPrevVisible = true;
			this.state.headerPrevScroll = scroll;
		}

		if (this.state.headerVisible === this.state.headerPrevVisible && forceState === undefined) {
			return;
		}

		this.state.headerVisible = forceState !== undefined ? forceState : this.state.headerPrevVisible;

		this.updateHeaderState(this.header, this.state.headerVisible);

		return this.state.headerVisible;
	}

	updateHeaderState = (header, state) => {
		header.forEach((h) => {
			h.classList.toggle(this.toggleClassName, state);
		});
	}
}

export default HeaderToggle;