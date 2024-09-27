const Footer = ({}) => {
	return <footer class="footer">
		<div class="footer__container">
			<div class="footer__wrap">
				<div class="footer__row">
					<div class="footer__col">
						<a href="" class="footer__logo">
                            <img src="/assets/images/logo/logo-header.svg" alt="Player Zero" />
                        </a>
					</div>

					<div class="footer__col">
						<nav class="footer__menu">
                            <ul class="footer__list">
                                <li class="footer__item"><a href="" class="footer__link"><span></span></a></li>
                                <li class="footer__item"><a href="" class="footer__link"><span></span></a></li>
                                <li class="footer__item"><a href="" class="footer__link"><span></span></a></li>
                                <li class="footer__item"><a href="" class="footer__link"><span></span></a></li>
                                <li class="footer__item"><a href="" class="footer__link"><span></span></a></li>
                            </ul>
                        </nav>
					</div>

					<div class="footer__col">
						<div class="footer__form">
                            <form action="" class="form">
                                <div class="form__box">
                                    <div class="form__field">
                                        <div class="form__title">Don’t miss our news and announcements</div>

                                        <div class="form__text">Subscribe and get all the info about Player Zero soon</div>
                                    </div>

                                    <div class="form__field">
                                        <input type="mail" class="form__input" placeholder='Your e-mail'/>

                                        <div class="form-message"></div>

                                        <div class="form__agreement">
                                            By subscribing you are accepting to receive marketing information from Player Zero and agree to the terms of our <a href="">Privacy Policy</a>
                                        </div>
                                    </div>

                                    <div class="form__field">
                                        <button class="form__button button" type='submit'><span>Subscribe</span></button>
                                    </div>
                                </div>

                                <div class="form-success"></div>
                                <div class="form-response"></div>
                            </form>
                        </div>

					</div>

					<div class="footer__col">
						<div class="footer__socials">
                            <div class="socials">
                                <a href="" class="socials__link">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" style="width: 24rem; height: 24rem;"><use xlink:href="#svg-x"></use></svg>
                                </a>

                                <a href="" class="socials__link">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" style="width: 24rem; height: 24rem;"><use xlink:href="#svg-discord"></use></svg>
                                </a>

                                <a href="" class="socials__link">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" style="width: 24rem; height: 24rem;"><use xlink:href="#svg-instagram"></use></svg>
                                </a>

                                <a href="" class="socials__link">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" style="width: 24rem; height: 24rem;"><use xlink:href="#svg-tiktok"></use></svg>
                                </a>

                                <a href="" class="socials__link">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" style="width: 24rem; height: 24rem;"><use xlink:href="#svg-arch"></use></svg>
                                </a>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</footer>
};

export default Footer;