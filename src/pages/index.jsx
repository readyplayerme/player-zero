import Layout from '../layouts/Layout.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default async ({ data }) => {
    return <Layout title="Player Zero" bodyClass="is-loading">

        <div class="cookies" data-elt="cookies">
            <button class="cookies__close" data-elt="closeCookies">
                <svg class="svg-icon" viewBox="0 0 40 40" width="24" height="24"><use xlink:href="#svg-close"></use></svg>
            </button>

            <div class="cookies__wrap">
                <div class="cookies__icon">
                    <img src="/assets/images/cookies.png" alt="" />
                </div>

                <div class="cookies__main">
                    <h5 class="cookies__title">This site uses cookies</h5>

                    <div class="cookies__text">By continuing to browse the site, you are agreeing to our use of <a href="https://readyplayer.me/cookies" target='_blank'>cookies</a></div>
                </div>

                <button class="cookies__button button" data-elt="acceptCookies">Got it!</button>
            </div>
        </div>

        <div class="wrapper">
            <Header />

            <main class="main">
                <section class="intro">
                    <div class="intro__bg">
                        <video muted loop playsinline autoplay src="/assets/images/intro-video.mp4" type="video/mp4"></video>
                    </div>

                    <div class="intro__container">
                        <div class="intro__wrap" data-elts="accordionBox">
                            <div class="intro__main">
                                <h1 class="intro__title">AVATAR COLLECTIBLE PLATFORM</h1>

                                <div class="intro__countdown">
                                    <div class="countdown">
                                        <div class="countdown__value" data-elt="hours">??</div>
                                        <div class="countdown__divider">
                                            <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24"><use xlink:href="#svg-union"></use></svg>
                                        </div>

                                        <div class="countdown__value" data-elt="mins">??</div>
                                        <div class="countdown__divider">
                                            <svg class="svg-icon" viewBox="0 0 24 24" width="24" height="24"><use xlink:href="#svg-union"></use></svg>
                                        </div>

                                        <div class="countdown__value" data-elt="secs">??</div>
                                    </div>
                                </div>

                                {/* <div class="intro__subtitle">Don’t miss the launch</div> */}

                            </div>

                            <div className="intro__bottom">

                                <div class="intro__controls">
                                    <div class="intro__button">
                                        <button class="button-play" data-elts="popupBtn" data-popup="video">
                                            <i></i>
                                            {/* <svg class="svg-icon svg-icon--icon" viewBox="0 0 105 43" width="105" height="43"><use xlink:href="#svg-play-icon"></use></svg>
                                            <svg class="svg-icon svg-icon--text" viewBox="0 0 101 38" width="101" height="38"><use xlink:href="#svg-play-text"></use></svg> */}
                                            <span>Play</span><span>Trailer</span>
                                        </button>

                                        {/* <div class="intro__line"></div> */}
                                    </div>

                                    <div class="intro__button">
                                        <a href="https://playerzero.readyplayer.me" target="_blank" class="button"><span>Launch The App</span></a>
                                        {/* <button class="button" data-elts="popupBtn" data-popup="video">Play Trailer</button> */}
                                    </div>

                                    <div class="intro__button">
                                        <a href="https://opensea.io/collection/collection-zero-by-player-zero/overview" target="_blank" class="button button--border"><span>Mint on OpenSea</span></a>
                                        {/* <button class="button button--border" type="button" data-elt="showFormAnim">Notify Me</button> */}
                                    </div>
                                </div>
                            </div>

                            <div class="intro__form" data-elt="formAnim">
                                <form action="/api/send" method="POST" class="form form--intro" id="subscribe-intro">
                                    <div class="form__box">
                                        <div class="form__field form__field--input" data-input="email">
                                            <input type="text" name="email" class="form__input" placeholder="YOUR E-MAIL"/>
                                            <div class="form-message" data-error="email"></div>
                                            <div class="form__agreement">
                                                By subscribing, you agree to receive marketing information from Ready Player Me and accept the terms of our <a href="https://readyplayer.me/privacy-policy" target='_blank'>Privacy Policy</a>
                                            </div>
                                        </div>

                                        <div class="form__field form__field--button">
                                            <button class="form__button button" type="submit">
                                                <svg class="svg-icon" viewBox="0 0 36 32" width="36" height="32"><use xlink:href="#svg-angle-right"></use></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="form-success"></div>
                                    <div class="form-response" data-form-response></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="homepage" id="homepage">
                    <div class="homepage__container">
                        <div class="homepage__wrap">
                            <div class="homepage__top">
                                <div class="decor">
                                    <div class="decor__line"></div>
                                    <div class="decor__circle"></div>
                                </div>
                            </div>

                            <h2 class="homepage__title">One identity. Every universe. your avatar everywhere.</h2>

                            <div class="homepage__main">
                                <div class="homepage__message">
                                    <div class="homepage-message">
                                        <div class="homepage-message__line homepage-message__line--left"></div>

                                        <div className="homepage-message__main">
                                            <div class="homepage-message__icon">
                                                <svg class="svg-icon" viewBox="0 0 24 24" width="64" height="64"><use xlink:href="#svg-star"></use></svg>
                                            </div>

                                            <div class="homepage-message__text">PlayerZero is the avatar collectible platform of the future, empowering users to create, customize, and evolve their digital identities across virtual worlds and games.</div>

                                            <div class="homepage-message__descr">Welcome to the new world, Player</div>
                                        </div>

                                        <div class="homepage-message__line homepage-message__line--right"></div>
                                    </div>
                                </div>

                                <div class="homepage__image">
                                    <img src="/assets/images/avatar-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="process" id="process">
                    <div class="process__container">
                        <div class="process__wrap">
                            <h2 class="process__title">how it works</h2>

                            <div class="process__main">
                                <div class="process__list">
                                    <div class="process__item">
                                        <div class="process-card">
                                            <div class="process-card__cover">
                                                <video muted loop playsinline autoplay src="/assets/images/process/playerZero-unrevealed-hq.mp4"type="video/mp4"></video>

                                            </div>

                                            <div class="process-card__content">
                                                <div class="process-card__num">01</div>

                                                <div class="process-card__title">Collect Packs</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="process__item">
                                        <div class="process-card">
                                        <div class="process-card__cover">
                                                <img src="/assets/images/process/01-new.png" alt="" />
                                            </div>

                                            <div class="process-card__content">
                                                <div class="process-card__num">02</div>

                                                <div class="process-card__title">Reveal Digital collectibles</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="process__item">
                                        <div class="process-card">
                                            <div class="process-card__cover">
                                                <video muted loop playsinline autoplay src="/assets/images/process/PlayerZero_CompanionMedia1.mp4" type="video/mp4"></video>
                                            </div>

                                            <div class="process-card__content">
                                                <div class="process-card__num">03</div>

                                                <div class="process-card__title">Customize your avatar</div>
                                            </div>

                                            <a href="https://playerzero.readyplayer.me" target='_blank' class="process__button button"><span>See it in action</span></a>
                                            {/* <button class="process__button button" data-elts="popupBtn" data-popup="process3"></button> */}
                                        </div>
                                    </div>

                                    <div class="process__item">
                                        <div class="process-card">
                                            <div class="process-card__cover">
                                                <img src="/assets/images/process/03-new.png" alt="" />
                                            </div>

                                            <div class="process-card__content">
                                                <div class="process-card__num">04</div>

                                                <div class="process-card__title">Play and explore</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="process__item">
                                        <div class="process-card">
                                            <div class="process-card__cover">
                                                <img src="/assets/images/process/04-new.png" alt="" />
                                            </div>

                                            <div class="process-card__content">
                                                <div class="process-card__num">05</div>

                                                <div class="process-card__title">Own your identity, everywhere</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="about" id="about">
                    <div class="about__container">
                        <div class="about__wrap">
                            <div class="about__block">
                                <h2 class="about__title">About us</h2>

                                <div class="about__image">
                                    <img src="/assets/images/about/about-3.png" alt="" />
                                </div>

                                <div class="about__main">
                                    <div class="about__logo">
                                        <img src="/assets/images/about/logo-about.svg" alt="" />
                                    </div>

                                    <div class="about__text">
                                        <p>PlayerZero is the next-gen avatar platform that empowers users to create, customize, and carry their digital identities across multiple online experiences. With fully interoperable avatars and digital collectibles, PlayerZero breaks the barriers of closed platforms, offering a seamless, connected identity wherever you play. Whether you’re leveling up, showcasing rare items, or jumping between worlds, your PlayerZero avatar goes with you. No boundaries, no limitations—just you, fully expressed, in every game, world, and experience.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="about__block">
                                <h2 class="about__title">BUILT BY READY PLAYER ME</h2>

                                <div class="about__image">
                                    <img src="/assets/images/about/about-1.png" alt="" />
                                </div>

                                <div class="about__main">
                                    <div class="about__logo">
                                        <img src="/assets/images/about/logo-rpm.svg" alt="" />
                                    </div>

                                    <div class="about__text">
                                        <p>Ready Player Me is an avatar tech leader delivering 10M+ avatars to games and apps every month. Our tech is currently used by 4,000 developers across the world. We offer avatar SDKs and APIs that developers can integrate effortlessly into their apps and games to build avatar systems and save time, boost engagement, and unlock new revenue streams with avatars.</p>
                                        <p>We’ve raised $72M from a16z, alongside a roster of tech, web3 and gaming leaders, including Punk 6529, gmoney, Snowfro, Sebastian Knutsson and Riccardo Zacconi (Co-founders of King), Justin Kan (Co-founder of Twitch) and Tom Preston-Werner (Co-founder of Github).</p>
                                    </div>

                                    <div class="about__partners about-partners">
                                        <div class="about-partners__title">Ready Player Me Partners</div>

                                        <div class="about-partners__list">
                                            <div class="about-partners__item">
                                                <img src="/assets/images/about/partners/step.png" alt="" />
                                            </div>

                                            <div class="about-partners__item">
                                                <img src="/assets/images/about/partners/step-1.png" alt="" />
                                            </div>

                                            <div class="about-partners__item">
                                                <img src="/assets/images/about/partners/step-2.png" alt="" />
                                            </div>

                                            <div class="about-partners__item">
                                                <img src="/assets/images/about/partners/step-3.png" alt="" />
                                            </div>

                                            <div class="about-partners__item">
                                                <img src="/assets/images/about/partners/step-4.png" alt="" />
                                            </div>

                                            <div class="about-partners__item">
                                                <img src="/assets/images/about/partners/step-5.png" alt="" />
                                            </div>

                                            <div class="about-partners__item">
                                                <img src="/assets/images/about/partners/step-6.png" alt="" />
                                            </div>

                                            <div class="about-partners__item">
                                                <img src="/assets/images/about/partners/step-7.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="mission">
                    <div class="mission__container">
                        <div class="mission__wrap">
                            <h2 class="mission__title">mission</h2>

                            <div class="mission__box">
                                <div class="mission__subtitle">
                                    <span>P</span><span>l</span>
                                    <span>a</span><span>y</span><span>e</span><span>r</span><span>Z</span><span>e</span><span>r</span><span>o</span>
                                </div>

                                <div class="mission__decor">
                                    <div class="decor">
                                        <div class="decor__circle"></div>
                                        <div class="decor__line"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="mission__text"><span>Our mission is to</span> build bridges between virtual experiences, <span>enabling a more</span> open and connected <span>virtual world</span>.</div>
                        </div>
                    </div>
                </section>

                <section class="faq" id="faq">
                    <div class="faq__container">
                        <div class="faq__wrap">
                            <h2 class="faq__title">FAQ</h2>

                            <div class="faq__list" data-elts="accordionBox">
                                <div class="faq__item">
                                    <div class="faq-card" data-elts="accordion">
                                        <div class="faq-card__top" data-elts="accordionBtn">
                                            <h3 class="faq-card__title">When does the platform launch?</h3>
                                            <div class="faq-card__arrow">
                                                <svg class="svg-icon" viewBox="0 0 22 22" width="22" height="22"><use xlink:href="#svg-arrow-down"></use></svg>
                                            </div>
                                        </div>

                                        <div class="faq-card__drop" data-elts="accordionDrop">
                                            <div class="faq-card__content" data-elts="accordionContent">It is live right now!</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="faq__item">
                                    <div class="faq-card" data-elts="accordion">
                                        <div class="faq-card__top" data-elts="accordionBtn">
                                            <h3 class="faq-card__title">Where will the packs be minted?</h3>
                                            <div class="faq-card__arrow">
                                                <svg class="svg-icon" viewBox="0 0 22 22" width="22" height="22"><use xlink:href="#svg-arrow-down"></use></svg>
                                            </div>
                                        </div>

                                        <div class="faq-card__drop" data-elts="accordionDrop">
                                            <div class="faq-card__content" data-elts="accordionContent">The packs are being minted on OpenSea.</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="faq__item">
                                    <div class="faq-card" data-elts="accordion">
                                        <div class="faq-card__top" data-elts="accordionBtn">
                                            <h3 class="faq-card__title">And when is the reveal?</h3>
                                            <div class="faq-card__arrow">
                                                <svg class="svg-icon" viewBox="0 0 22 22" width="22" height="22"><use xlink:href="#svg-arrow-down"></use></svg>
                                            </div>
                                        </div>

                                        <div class="faq-card__drop" data-elts="accordionDrop">
                                            <div class="faq-card__content" data-elts="accordionContent">Soon after the mint is over, the packs will change into avatar cosmetics.</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="faq__item">
                                    <div class="faq-card" data-elts="accordion">
                                        <div class="faq-card__top" data-elts="accordionBtn">
                                            <h3 class="faq-card__title">What kind of assets can I get from packs?</h3>
                                            <div class="faq-card__arrow">
                                                <svg class="svg-icon" viewBox="0 0 22 22" width="22" height="22"><use xlink:href="#svg-arrow-down"></use></svg>
                                            </div>
                                        </div>

                                        <div class="faq-card__drop" data-elts="accordionDrop">
                                            <div class="faq-card__content" data-elts="accordionContent">The packs will reveal an avatar collectible you can use on your avatar and in games and on socials. The assets come in many different rarities. If you’re lucky, you might get something rare.</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="faq__item">
                                    <div class="faq-card" data-elts="accordion">
                                        <div class="faq-card__top" data-elts="accordionBtn">
                                            <h3 class="faq-card__title">How to create my avatar?</h3>
                                            <div class="faq-card__arrow">
                                                <svg class="svg-icon" viewBox="0 0 22 22" width="22" height="22"><use xlink:href="#svg-arrow-down"></use></svg>
                                            </div>
                                        </div>

                                        <div class="faq-card__drop" data-elts="accordionDrop">
                                            <div class="faq-card__content" data-elts="accordionContent">Go to <a href="https://playerzero.readyplayer.me" target='_blank'><span>https://playerzero.readyplayer.me</span></a> to fully build your avatar.</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="faq__item">
                                    <div class="faq-card" data-elts="accordion">
                                        <div class="faq-card__top" data-elts="accordionBtn">
                                            <h3 class="faq-card__title">Are there more pack drops in the future?</h3>
                                            <div class="faq-card__arrow">
                                                <svg class="svg-icon" viewBox="0 0 22 22" width="22" height="22"><use xlink:href="#svg-arrow-down"></use></svg>
                                            </div>
                                        </div>

                                        <div class="faq-card__drop" data-elts="accordionDrop">
                                            <div class="faq-card__content" data-elts="accordionContent">Yes, there are many more drops coming from PlayerZero and our partners. Some with web3 native brands and some more mainstream. Ready Player Me, the creator of PlayerZero, has previously partnered with Adidas, Warner Music, Universal Music, Dior, L’Oreal, Vogue, RTFKT, and many others.</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="faq__item">
                                    <div class="faq-card" data-elts="accordion">
                                        <div class="faq-card__top" data-elts="accordionBtn">
                                            <h3 class="faq-card__title">Is this a gaming avatar?</h3>
                                            <div class="faq-card__arrow">
                                                <svg class="svg-icon" viewBox="0 0 22 22" width="22" height="22"><use xlink:href="#svg-arrow-down"></use></svg>
                                            </div>
                                        </div>

                                        <div class="faq-card__drop" data-elts="accordionDrop">
                                            <div class="faq-card__content" data-elts="accordionContent">PlayerZero avatars are usable in games, but they’re built to be a representation of you online more generally. You can use your avatar as a profile picture on socials today. We will be adding chat stickers and other ways to use your avatar in the future.</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="faq__item">
                                    <div class="faq-card" data-elts="accordion">
                                        <div class="faq-card__top" data-elts="accordionBtn">
                                            <h3 class="faq-card__title">Will you add more games?</h3>
                                            <div class="faq-card__arrow">
                                                <svg class="svg-icon" viewBox="0 0 22 22" width="22" height="22"><use xlink:href="#svg-arrow-down"></use></svg>
                                            </div>
                                        </div>

                                        <div class="faq-card__drop" data-elts="accordionDrop">
                                            <div class="faq-card__content" data-elts="accordionContent">Yes, our mission is to make your avatar usable in any experience across virtual worlds. Ready Player Me, the creator of PlayerZero, is an avatar tech company and their technology is already used by thousands of developers. We’ll be working with our partners to support more experiences from the existing Ready Player Me network and of course add new games to the platform.</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="faq__item">
                                    <div class="faq-card" data-elts="accordion">
                                        <div class="faq-card__top" data-elts="accordionBtn">
                                            <h3 class="faq-card__title">Is this exclusively a web experience?</h3>
                                            <div class="faq-card__arrow">
                                                <svg class="svg-icon" viewBox="0 0 22 22" width="22" height="22"><use xlink:href="#svg-arrow-down"></use></svg>
                                            </div>
                                        </div>

                                        <div class="faq-card__drop" data-elts="accordionDrop">
                                            <div class="faq-card__content" data-elts="accordionContent">We will start from web games to create an initial fun experience, but we’ll be adding games on other platforms in the future.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>

        <div class="popup" data-elts="popup" data-popup="video">
            <div class="popup__box">
                <button class="popup__close" data-elts="closePopup">
                    <svg class="svg-icon" viewBox="0 0 40 40" width="40" height="40"><use xlink:href="#svg-close"></use></svg>
                </button>

                <div class="popup__main">
                    <div class="popup__video">
                        <div class="video">
                            <video loop playsinline src="/assets/images/trailer-new.mp4" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="popup" data-elts="popup" data-popup="process3">
            <div class="popup__box">
                <button class="popup__close" data-elts="closePopup">
                    <svg class="svg-icon" viewBox="0 0 40 40" width="40" height="40"><use xlink:href="#svg-close"></use></svg>
                </button>

                <div class="popup__main">
                    <div class="popup__video">
                        <div class="video">
                            <video loop playsinline src="/assets/images/process/PlayerZero_CompanionMedia1.mp4" type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
}
