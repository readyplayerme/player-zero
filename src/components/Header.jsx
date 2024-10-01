const Header = ({children, data}) => {
	return <header class="header is-active" data-elt="header">
		<div class="header__container">
			<div class="header__wrap">
				<a href="" class="header__logo">
					<svg class="svg-icon" viewBox="0 0 200 72" width="200" height="72"><use xlink:href="#svg-logo"></use></svg>
				</a>

                <div class="header__socials">
                    <div class="socials">
                        <a href="https://x.com/weareplayerzero" class="socials__link" target="_blank">
                            <svg class="svg-icon" viewBox="0 0 40 40" width="40" height="40"><use xlink:href="#svg-x"></use></svg>
                        </a>

                        <a href="https://discord.gg/weareplayerzero" class="socials__link" target="_blank">
                            <svg class="svg-icon" viewBox="0 0 40 40" width="40" height="40"><use xlink:href="#svg-discord"></use></svg>
                        </a>

                        <a href="https://www.instagram.com/weareplayerzero" class="socials__link" target="_blank">
                            <svg class="svg-icon" viewBox="0 0 40 40" width="40" height="40"><use xlink:href="#svg-instagram"></use></svg>
                        </a>

                        <a href="https://www.tiktok.com/@weareplayerzero" class="socials__link" target="_blank">
                            <svg class="svg-icon" viewBox="0 0 40 40" width="40" height="40"><use xlink:href="#svg-tiktok"></use></svg>
                        </a>

                        <a href="" class="socials__link" target="_blank">
                            <svg class="svg-icon" viewBox="0 0 40 40" width="40" height="40"><use xlink:href="#svg-arch"></use></svg>
                        </a>
                    </div>
                </div>

				{/* <div class="header__nav">
					<nav class="nav">
						<ul class="nav__list">
							<li class="nav__item">
                                <a href="" class="nav__link">
                                    <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" style="width: 24rem; height: 24rem;"><use xlink:href="#svg-star"></use></svg>
                                    <span>Homepage</span>
                                </a>
                            </li>

							<li class="nav__item">
                                <a href="" class="nav__link">
                                    <svg class="svg-icon" viewBox="0 0 22 25" width="22" height="25" style="width: 22rem; height: 25rem;"><use xlink:href="#svg-nav-icon"></use></svg>
                                    <span>ABOUT US</span>
                                </a>
                            </li>

							<li class="nav__item">
                                <a href="" class="nav__link">
                                    <svg class="svg-icon" viewBox="0 0 23 23" width="23" height="23" style="width: 23rem; height: 23rem;"><use xlink:href="#svg-circle"></use></svg>
                                    <span>FAQ</span>
                                </a>
                            </li>

                            <li class="nav__item">
                                <a href="" class="nav__link">
                                    <svg class="svg-icon" viewBox="0 0 21 22" width="21" height="22" style="width: 21rem; height: 22rem;"><use xlink:href="#svg-angle-full"></use></svg>
                                    <span>HOW TO UsE</span>
                                </a>
                            </li>
						</ul>
					</nav>
				</div> */}

                {/* <div class="header__countdown">
                    <div class="countdown">
                        <div class="countdown__value">02</div>
                        <div class="countdown__divider">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" style="width: 24rem; height: 24rem;"><use xlink:href="#svg-union"></use></svg>
                        </div>

                        <div class="countdown__value">36</div>
                        <div class="countdown__divider">
                            <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" style="width: 24rem; height: 24rem;"><use xlink:href="#svg-union"></use></svg>
                        </div>

                        <div class="countdown__value">58</div>
                    </div>
                </div> */}
			</div>
		</div>
	</header>
};

export default Header;