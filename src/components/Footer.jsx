const Footer = ({}) => {
	return <footer class="footer">
		<div class="footer__container">
			<div class="footer__wrap">
				<div class="footer__row">
					<div class="footer__col">
                        <a href="" class="footer__logo">
                            <img src="/assets/images/icons/logo-footer.svg" alt="Player Zero" />
                        </a>
                        {/* <div class="footer__logos">
                            <a href="" class="footer__logo footer__logo--pz">
                                <svg class="svg-icon" viewBox="0 0 200 72" width="150" height="54"><use xlink:href="#svg-logo"></use></svg>
                                <span>by Ready Player Me</span>
                            </a>
 
                            <div class="footer__logo-text">
                                <span>by Ready Player Me</span>
                            </div>

                            <a href="" class="footer__logo footer__logo--rpm">
                                <span>Built by</span>
                                <img src="/assets/images/icons/logo-rpm-white.svg" alt="Ready player me" />
                            </a>
                        </div> */}
					</div>

					<div class="footer__col footer__col--menu">
						<nav class="footer__menu">
                            <ul class="footer__list">
                                <li class="footer__item"><a href="#homepage" class="footer__link" data-elts="scrollLink"><span>Homepage</span></a></li>
                                <li class="footer__item"><a href="#process" class="footer__link" data-elts="scrollLink"><span>How it Works</span></a></li>
                                <li class="footer__item"><a href="#about" class="footer__link" data-elts="scrollLink"><span>About Us</span></a></li>
                                <li class="footer__item"><a href="#faq" class="footer__link" data-elts="scrollLink"><span>FAQ</span></a></li>
                                <li class="footer__item"><a href="https://readyplayer.me/terms" class="footer__link" target='_blank'><span>Terms of Use</span></a></li>
                                <li class="footer__item"><a href="https://readyplayer.me/privacy-policy" target='_blank' class="footer__link"><span>Privacy Policy</span></a></li>
                            </ul>
                        </nav>
					</div>

					<div class="footer__col footer__col--form">
						<div class="footer__form">
                            <form action="/api/send" method="POST" class="form form--footer" id="subscribe-footer">
                                <div class="form__box">
                                    <div class="form__field">
                                        <div class="form__title">Don’t miss our news and announcements</div>
                                        <div class="form__text">Subscribe and get all the info about Player Zero soon</div>
                                    </div>

                                    <div class="form__field" data-input="email">
                                        <input name="email" type="text" class="form__input" placeholder="Your e-mail"/>
                                        <div class="form-message" data-error></div>

                                        <div class="form__agreement">
                                            By subscribing you are accepting to receive marketing information from Player Zero and agree to the terms of our <a href="https://readyplayer.me/privacy-policy" target='_blank'>Privacy Policy</a>
                                        </div>
                                    </div>

                                    <div class="form__field form__field--controls">
                                        <button class="form__button button" type='submit'><span>Subscribe</span></button>
                                    </div>
                                </div>

                                <div class="form-success"></div>
                                <div class="form-response" data-form-response></div>
                            </form>
                        </div>

					</div>

					<div class="footer__col footer__col--socials">
						<div class="footer__socials">
                            <div class="socials">
                                <a href="https://x.com/weareplayerzero" class="socials__link" target="_blank">
                                    <svg class="svg-icon" viewBox="0 0 40 40" width="24" height="24"><use xlink:href="#svg-x"></use></svg>
                                </a>

                                <a href="https://discord.gg/weareplayerzero" class="socials__link" target="_blank">
                                    <svg class="svg-icon" viewBox="0 0 40 40" width="24" height="24"><use xlink:href="#svg-discord"></use></svg>
                                </a>

                                <a href="https://www.instagram.com/weareplayerzero" class="socials__link" target="_blank">
                                    <svg class="svg-icon" viewBox="0 0 40 40" width="24" height="24"><use xlink:href="#svg-instagram"></use></svg>
                                </a>

                                <a href="https://www.tiktok.com/@weareplayerzero" class="socials__link" target="_blank">
                                    <svg class="svg-icon" viewBox="0 0 40 40" width="24" height="24"><use xlink:href="#svg-tiktok"></use></svg>
                                </a>

                                {/* <a href="" class="socials__link" target="_blank">
                                    <svg class="svg-icon" viewBox="0 0 40 40" width="24" height="24"><use xlink:href="#svg-arch"></use></svg>
                                </a> */}
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</footer>
};

export default Footer;