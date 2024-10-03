const Header = ({children, data}) => {
	return <header class="header is-active" data-elt="header">
		<div class="header__container">
			<div class="header__wrap">
				<a href="" class="header__logo">
                    <video muted loop playsinline autoplay src="/assets/images/logo-dynamic.mp4" type="video/mp4"></video>
					{/* <svg class="svg-icon" viewBox="0 0 200 72" width="200" height="72"><use xlink:href="#svg-logo"></use></svg> */}
				</a>

				<div class="header__nav">
					<nav class="nav">
                        <div class="nav__bg">
                            <svg class="svg-icon" width="942" height="64" viewBox="0 0 942 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" x="0" y="0">
                                <path d="M0.9 20C0.9 9.45136 9.45136 0.9 20 0.9H185C187.365 0.9 189.627 1.32935 191.715 2.11356C195.992 3.72013 200.098 6.34019 204.304 9.02454C205.608 9.85678 206.922 10.6952 208.253 11.5115C213.804 14.9145 219.629 17.9 226 17.9C232.371 17.9 238.196 14.9145 243.747 11.5115C245.078 10.6952 246.392 9.85678 247.696 9.02454C251.902 6.34019 256.008 3.72013 260.285 2.11355C262.373 1.32935 264.635 0.9 267 0.9H429C431.365 0.9 433.627 1.32935 435.715 2.11355C439.992 3.72012 444.098 6.34018 448.304 9.02453C449.608 9.85677 450.922 10.6952 452.253 11.5115C457.804 14.9145 463.629 17.9 470 17.9C476.371 17.9 482.196 14.9145 487.747 11.5115C489.078 10.6952 490.392 9.85677 491.696 9.02453C495.902 6.34018 500.008 3.72012 504.285 2.11355C506.373 1.32935 508.635 0.9 511 0.9H673C675.029 0.9 676.982 1.21591 678.813 1.80056C683.621 3.33493 688.229 6.18799 692.952 9.11283C694.077 9.8098 695.209 10.5109 696.352 11.1991C702.215 14.7292 708.341 17.9 715 17.9C721.659 17.9 727.785 14.7292 733.648 11.1991C734.791 10.5109 735.923 9.8098 737.048 9.11282C741.771 6.18799 746.379 3.33493 751.187 1.80056C753.018 1.21591 754.971 0.9 757 0.9H922C932.549 0.9 941.1 9.45136 941.1 20V44C941.1 54.5486 932.549 63.1 922 63.1H757C754.971 63.1 753.018 62.7841 751.187 62.1994C746.379 60.6651 741.771 57.812 737.048 54.8872C735.923 54.1902 734.791 53.4891 733.648 52.8009C727.785 49.2708 721.659 46.1 715 46.1C708.341 46.1 702.215 49.2708 696.352 52.8009C695.209 53.4891 694.077 54.1902 692.952 54.8872C688.229 57.812 683.621 60.6651 678.813 62.1994C676.982 62.7841 675.029 63.1 673 63.1H511C508.635 63.1 506.373 62.6707 504.285 61.8865C500.008 60.2799 495.902 57.6598 491.696 54.9755C490.392 54.1432 489.078 53.3048 487.747 52.4885C482.196 49.0855 476.371 46.1 470 46.1C463.629 46.1 457.804 49.0855 452.253 52.4885C450.922 53.3048 449.608 54.1432 448.304 54.9755C444.098 57.6598 439.992 60.2799 435.715 61.8864C433.627 62.6707 431.365 63.1 429 63.1H267C264.635 63.1 262.373 62.6707 260.285 61.8864C256.008 60.2799 251.902 57.6598 247.696 54.9755C246.392 54.1432 245.078 53.3048 243.747 52.4885C238.196 49.0855 232.371 46.1 226 46.1C219.629 46.1 213.804 49.0855 208.253 52.4885C206.922 53.3048 205.608 54.1433 204.304 54.9755C200.098 57.6598 195.992 60.2799 191.715 61.8864C189.627 62.6707 187.365 63.1 185 63.1H20C9.45137 63.1 0.9 54.5486 0.9 44V20Z" stroke="#26262A" stroke-width="1.8" fill="none"/>
                                <path d="M226 26L226 38" stroke="#26262A" stroke-width="1.8" fill="none"/>
                                <path d="M471 26L471 38" stroke="#26262A" stroke-width="1.8" fill="none"/>
                                <path d="M714 26L714 38" stroke="#26262A" stroke-width="1.8" fill="none"/>
                            </svg>
                        </div>

						<ul class="nav__list">
							<li class="nav__item">
                                <a href="#homepage" class="nav__link is-active-" data-elts="scrollLink">
                                    <span class="default">
                                        <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24" style="width: 24rem; height: 24rem;"><use xlink:href="#svg-star"></use></svg>
                                        <span>Homepage</span>
                                    </span>
                                    <span class="hover">Homepage</span>
                                </a>
                            </li>

                            <li class="nav__item">
                                <a href="#process" class="nav__link" data-elts="scrollLink">
                                    <span class="default">
                                        <svg class="svg-icon" viewBox="0 0 21 22" width="21" height="22" style="width: 21rem; height: 22rem;"><use xlink:href="#svg-angle-full"></use></svg>
                                        <span>HOW TO UsE</span>
                                    </span>
                                    <span class="hover">HOW TO UsE</span>
                                </a>
                            </li>

							<li class="nav__item">
                                <a href="#about" class="nav__link" data-elts="scrollLink">
                                    <span class="default">
                                        <svg class="svg-icon" viewBox="0 0 22 25" width="22" height="25" style="width: 22rem; height: 25rem;"><use xlink:href="#svg-ava"></use></svg>
                                        <span>ABOUT US</span>
                                    </span>
                                    <span class="hover">ABOUT US</span>
                                </a>
                            </li>

							<li class="nav__item">
                                <a href="#faq" class="nav__link" data-elts="scrollLink">
                                    <span class="default">
                                        <svg class="svg-icon" viewBox="0 0 23 23" width="23" height="23" style="width: 23rem; height: 23rem;"><use xlink:href="#svg-circle"></use></svg>
                                        <span>FAQ</span>
                                    </span>
                                    <span class="hover">FAQ</span>
                                </a>
                            </li>
						</ul>
					</nav>
				</div>

                <div class="header__socials">
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

                <div class="header__burger" data-elt="navToggle">
                    <span></span><span></span>
                </div>
			</div>
		</div>
	</header>
};

export default Header;