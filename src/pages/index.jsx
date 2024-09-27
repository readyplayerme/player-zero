import Layout from '../layouts/Layout.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default async ({ data }) => {
    // inline request example
    // const apiResponse = await fetch(process.env.URL + '/api/200.json').then(r => r.json()).catch(e => e.message);
    // console.log('In JSX fetch inside component happens on component request', apiResponse);
    return <Layout title="Player Zero">
        <div class="wrapper">
            <div class="preloader">
                <div class="preloader__progress"><span></span></div>
            </div>

            <div class="scroll-down">
                <div class="scroll-down__icon">
                    <svg class="svg-icon" viewBox="0 0 21 22" width="21" height="22" style="width: 21rem; height: 22rem;"><use xlink:href="#svg-angle-border"></use></svg>
                </div>

                <div class="scroll-down__text">SCROLL FOR MORE</div>
            </div>

            <Header />

            <main class="main">
                <section class="intro">
                    <div class="intro__container">
                        <div class="intro__wrap">
                            <div class="intro__button"></div>
                            <div class="intro__title">TRAILER</div>
                        </div>
                    </div>
                </section>

                <section class="hero">
                    <div class="hero__container">
                        <div class="hero__wrap">
                            <div class="hero__title">
                                <div class="hero__letters">
                                    <span>J</span><span>U</span><span>M</span><span>P</span>
                                </div>

                                <div class="hero__letters">
                                    <span>I</span><span>N</span>
                                </div>
                            </div>

                            <div class="hero__subtitle">PlayerZero</div>

                            <div class="hero__line">
                                <div class="decor">
                                    <div class="decor__line"></div>
                                </div>
                            </div>

                            <div class="hero__form">
                                <form action="" class="form">
                                    <div class="form__box">
                                        <div class="form__field">
                                            <input type="mail" class="form__input" placeholder='YOUR E-MAIL'/>

                                            <div class="form-message"></div>
                                        </div>

                                        <div class="form__field">
                                            <button class="form__button button" type='submit'>
                                                <svg class="svg-icon" viewBox="0 0 32 36" width="32" height="36" style="width: 32rem; height: 36rem;"><use xlink:href="#svg-angle-right"></use></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="form-success"></div>
                                    <div class="form-response"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="homepage">
                    <div class="homepage__container">
                        <div class="homepage__wrap">
                            <div class="homepage__decor">
                                <div class="decor">
                                    <div class="decor__line"></div>
                                    <div class="decor__circle"></div>
                                </div>
                            </div>

                            <div class="homepage__title">One identity. Every universe. Endless power.</div>

                            <div class="homepage__row">
                                <div class="homepage__col homepage__col--socials">
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

                                <div class="homepage__col homepage__col--image">
                                    <div class="homepage__image">
                                        <img src="/assets/images/avatar-1.png" />
                                    </div>
                                </div>

                                <div class="homepage__col homepage__col--content">
                                    <div class="homepage__content">
                                        <div class="homepage__message">
                                            <div class="message">
                                                <div class="message__border"></div>

                                                <div class="message__main">
                                                    <div class="message__icon">
                                                        <svg class="svg-icon" viewBox="0 0 24 24" width="64" height="64" style="width: 64rem; height: 64rem;"><use xlink:href="#svg-star"></use></svg>
                                                    </div>
                                                    <div class="message__text">Create it. Customize it. Collect it. Play it—your avatar, your way. You can build and personalize every detail of your avatar identity, collect rare digital items to level up, and flex your identity across every game and virtual world. No limits, no closed ecosystems. Just you. In every universe</div>

                                                    <div class="message__title">Welcome to the new world, Player</div>
                                                </div>

                                                <div class="message__border"></div>
                                            </div>
                                        </div>

                                        <div class="homepage__links">
                                            <a href="" class="homepage__link">
                                                <span>[ FIND OUT MORE ]</span>
                                                <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-arrow-out"></use></svg>
                                            </a>

                                            <a href="" class="homepage__link">
                                                <span>[ GET READY ]</span>
                                                <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-arrow-out"></use></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="process">
                    <div class="process__container">
                        <div class="process__wrap">
                            <div class="process__steps">
                                <div class="process__list">
                                    <div class="process__item">
                                        <div class="process-card">
                                            <div class="process-card__img">
                                                <img src="/assets/images/steps/00.png" alt="" />
                                            </div>
                                            <div class="process-card__num">01</div>
                                            <div class="process-card__text">Create the avatar</div>
                                        </div>
                                    </div>

                                    <div class="process__item">
                                        <div class="process-card">
                                            <div class="process-card__img">
                                                <img src="/assets/images/steps/01.png" alt="" />
                                            </div>
                                            <div class="process-card__num">02</div>
                                            <div class="process-card__text">Collect the Items</div>
                                        </div>
                                    </div>

                                    <div class="process__item">
                                        <div class="process-card">
                                            <div class="process-card__img">
                                                <img src="/assets/images/steps/00.png" alt="" />
                                            </div>
                                            <div class="process-card__num">03</div>
                                            <div class="process-card__text">Packs reveal digital collectibles</div>
                                        </div>
                                    </div>

                                    <div class="process__item">
                                        <div class="process-card">
                                            <div class="process-card__img">
                                                <img src="/assets/images/steps/01.png" alt="" />
                                            </div>
                                            <div class="process-card__num">04</div>
                                            <div class="process-card__text">Customize Your Avatar</div>
                                        </div>
                                    </div>

                                    <div class="process__item">
                                        <div class="process-card">
                                            <div class="process-card__img">
                                                <img src="/assets/images/steps/00.png" alt="" />
                                            </div>
                                            <div class="process-card__num">05</div>
                                            <div class="process-card__text">Play it</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="process__line"></div>
                            </div>

                            <div class="process__text">PlayerZero is built by Ready Player Me, an avatar tech leader with over ten years of experience delivering avatars to users and games. Ready Player Me is backed by <a href="">A16z</a>, the founders of <a href="">King</a>, <a href="">Github</a>, <a href="">Artblocks</a> and renowned web3 leaders & tastemakers gmoney and <a href="">Punk2659</a></div>
                        </div>
                    </div>
                </section>

                <section class="faq">
                    <div class="faq__container">
                        <div class="faq__wrap">
                            <div class="faq__row">
                                <div class="faq__col">
                                    <div class="faq__title">Faq</div>
                                </div>

                                <div class="faq__col">
                                    <div class="faq__list">
                                        <div class="faq__item">
                                            <div class="faq-card">
                                                <div class="faq-card__top">
                                                    <div class="faq-card__dot"><span></span></div>
                                                    <div class="faq-card__title">What is an NFT?</div>
                                                    <div class="faq-card__arrow">
                                                        <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-arrow-down"></use></svg>
                                                    </div>
                                                </div>

                                                <div class="faq-card__drop">
                                                    <div class="faq-card__content">An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership or proof of authenticity for a specific item, artwork, or piece of content on the blockchain. Unlike cryptocurrencies like Bitcoin or Ethereum, NFTs are indivisible and cannot be exchanged on a one-to-one basis, making each token distinct</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="faq__item">
                                            <div class="faq-card">
                                                <div class="faq-card__top">
                                                    <div class="faq-card__dot"><span></span></div>
                                                    <div class="faq-card__title">What are the benefits of owning an NFT?</div>
                                                    <div class="faq-card__arrow">
                                                        <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-arrow-down"></use></svg>
                                                    </div>
                                                </div>

                                                <div class="faq-card__drop">
                                                    <div class="faq-card__content">An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership or proof of authenticity for a specific item, artwork, or piece of content on the blockchain. Unlike cryptocurrencies like Bitcoin or Ethereum, NFTs are indivisible and cannot be exchanged on a one-to-one basis, making each token distinct</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="faq__item">
                                            <div class="faq-card">
                                                <div class="faq-card__top">
                                                    <div class="faq-card__dot"><span></span></div>
                                                    <div class="faq-card__title">Are NFTs a good investment?</div>
                                                    <div class="faq-card__arrow">
                                                        <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-arrow-down"></use></svg>
                                                    </div>
                                                </div>

                                                <div class="faq-card__drop">
                                                    <div class="faq-card__content">An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership or proof of authenticity for a specific item, artwork, or piece of content on the blockchain. Unlike cryptocurrencies like Bitcoin or Ethereum, NFTs are indivisible and cannot be exchanged on a one-to-one basis, making each token distinct</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="faq__item">
                                            <div class="faq-card">
                                                <div class="faq-card__top">
                                                    <div class="faq-card__dot"><span></span></div>
                                                    <div class="faq-card__title">Are NFT avatars just digital images, or do they have utility?</div>
                                                    <div class="faq-card__arrow">
                                                        <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-arrow-down"></use></svg>
                                                    </div>
                                                </div>

                                                <div class="faq-card__drop">
                                                    <div class="faq-card__content">An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership or proof of authenticity for a specific item, artwork, or piece of content on the blockchain. Unlike cryptocurrencies like Bitcoin or Ethereum, NFTs are indivisible and cannot be exchanged on a one-to-one basis, making each token distinct</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="faq__item">
                                            <div class="faq-card">
                                                <div class="faq-card__top">
                                                    <div class="faq-card__dot"><span></span></div>
                                                    <div class="faq-card__title">What should I consider before buying an NFT avatar?</div>
                                                    <div class="faq-card__arrow">
                                                        <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-arrow-down"></use></svg>
                                                    </div>
                                                </div>

                                                <div class="faq-card__drop">
                                                    <div class="faq-card__content">An NFT, or Non-Fungible Token, is a unique digital asset that represents ownership or proof of authenticity for a specific item, artwork, or piece of content on the blockchain. Unlike cryptocurrencies like Bitcoin or Ethereum, NFTs are indivisible and cannot be exchanged on a one-to-one basis, making each token distinct</div>
                                                </div>
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
                            <div class="mission__title">Mission</div>
                            <div class="mission__subtitle">PlayerZero</div>
                            <div class="mission__decor">
                                <div class="decor">
                                    <div class="decor__circle"></div>
                                    <div class="decor__line"></div>
                                </div>
                            </div>

                            <div class="mission__text">Our mission is to build <a href=''>a truly open metaverse</a> — one that unlocks <a href=''>limitless possibilities</a> and revolutionizes how we live, communicate, and connect. We believe in an open economy that puts <a href=''>power in the hands of creators</a> and builders, not just a few closed ecosystems. Our goal is to give back the power to <a href=''>own, customize, and use your identity</a> across multiple worlds and games from day one</div>
                        </div>
                    </div>
                </section>

                <section class="about">
                    <div class="about__container">
                        <div class="about__wrap">
                            <div class="about__main">
                                <div class="about__row">
                                    <div class="about__col">
                                        <div class="about__title">About us</div>
                                        <div class="about__text">
                                            <p>Our avatars are ready for action in
                                            a multitude of virtual universes, offering endless customization to match your style and personality. Whether you’re leveling up, showcasing rare items, or jumping between worlds, your PlayerZero avatar goes with you. No more boundaries, no more limitations —just you, fully expressed, in every game, world, and experience</p>
                                            <p>Powered by Ready Player Me with 10+ years of experience in avatar tech and an established ecosystem with over one million monthly active users, PlayerZero is here to redefine the culture of self-expression in the metaverse. We believe in an open, interoperable metaverse where your identity is persistent, and the power is in your hands to shape your own digital future</p>
                                        </div>

                                        <div class="about__bottom">
                                            <div class="about__logo">
                                                <img src="/assets/images/about/logo-about.svg" alt="" />
                                            </div>

                                            <a href="" class="about__link">
                                                <span>[ LEARN MORE ]</span>
                                                <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-arrow-out"></use></svg>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="about__col">
                                        <div class="about__image">
                                            <img src="/assets/images/about/00.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div class="about__row">
                                    <div class="about__col">
                                        <div class="about__image">
                                            <img src="/assets/images/about/02.png" alt="" />
                                        </div>
                                    </div>

                                    <div class="about__col">
                                        <div class="about__title">about RPM</div>
                                        <div class="about__text">Ready Player Me is an avatar tech leader that provides developers with an easy-to-integrate Avatar Creator and developer tools to give their users highly-personalized avatars to help increase retention and engagement. With over 3,000 monthly active developers building on Ready Player Me, and over 12 million avatars supported across partner games and platforms, Ready Player Me is an imperative component of the future of digital identity </div>

                                        <div class="about__bottom">
                                            <div class="about__logo">
                                                <img src="/assets/images/about/logo-rpm.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="about__partners">
                                <div class="about__subtitle">Backed by</div>

                                <div class="about__list">
                                    <div class="about__item">
                                        <div class="about-card">
                                            <div class="about-card__img">
                                                <img src="/assets/images/about/00.png" alt="" />
                                            </div>

                                            <div class="about-card__title">Riccardo Zacconi</div>
                                            <div class="about__position">Co-founder of King</div>
                                        </div>
                                    </div>

                                    <div class="about__item">
                                        <div class="about-card">
                                            <div class="about-card__img">
                                                <img src="/assets/images/about/01.png" alt="" />
                                            </div>

                                            <div class="about-card__title">Justin Kan</div>
                                            <div class="about__position">Co-founder of Twitch and Fractal</div>
                                        </div>
                                    </div>

                                    <div class="about__item">
                                        <div class="about-card">
                                            <div class="about-card__img">
                                                <img src="/assets/images/about/02.png" alt="" />
                                            </div>

                                            <div class="about-card__title">Tom Preston-Werner</div>
                                            <div class="about__position">Co-founder of Github</div>
                                        </div>
                                    </div>

                                    <div class="about__item">
                                        <div class="about-card">
                                            <div class="about-card__img">
                                                <img src="/assets/images/about/03.png" alt="" />
                                            </div>

                                            <div class="about-card__title">Punk6529</div>
                                            <div class="about__position">Сrypto investor</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="about__logos">
                                    <div class="about-partners">
                                        <div class="about-partners__list">
                                            <div class="about-partners__item">
                                                <div class="about-partners__img">
                                                    <img src="/assets/images/about/partners/00.png" alt="" />
                                                </div>
                                            </div>

                                            <div class="about-partners__item">
                                                <div class="about-partners__img">
                                                    <img src="/assets/images/about/partners/01.png" alt="" />
                                                </div>
                                            </div>

                                            <div class="about-partners__item">
                                                <div class="about-partners__img">
                                                    <img src="/assets/images/about/partners/02.png" alt="" />
                                                </div>
                                            </div>

                                            <div class="about-partners__item">
                                                <div class="about-partners__img">
                                                    <img src="/assets/images/about/partners/03.png" alt="" />
                                                </div>
                                            </div>

                                            <div class="about-partners__item">
                                                <div class="about-partners__img">
                                                    <img src="/assets/images/about/partners/04.png" alt="" />
                                                </div>
                                            </div>

                                            <div class="about-partners__item">
                                                <div class="about-partners__img">
                                                    <img src="/assets/images/about/partners/00.png" alt="" />
                                                </div>
                                            </div>

                                            <div class="about-partners__item">
                                                <div class="about-partners__img">
                                                    <img src="/assets/images/about/partners/01.png" alt="" />
                                                </div>
                                            </div>

                                            <div class="about-partners__item">
                                                <div class="about-partners__img">
                                                    <img src="/assets/images/about/partners/02.png" alt="" />
                                                </div>
                                            </div>

                                            <div class="about-partners__item">
                                                <div class="about-partners__img">
                                                    <img src="/assets/images/about/partners/03.png" alt="" />
                                                </div>
                                            </div>

                                            <div class="about-partners__item">
                                                <div class="about-partners__img">
                                                    <img src="/assets/images/about/partners/04.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="application">
                    <div class="application__line">
                        <img src="/assets/images/application-line.png" alt="" />
                    </div>

                    <div class="application__continer">
                        <div class="application__wrap">
                            <div class="application__title">how to use your nft</div>

                            <div class="application__row">
                                <div class="application__col application__col--left">
                                    <div class="application__list">
                                        <div class="application__item">
                                            <div class="application-card">
                                                <div class="application-card__icon">
                                                    <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-point1"></use></svg>
                                                </div>

                                                <div class="application-card__title">Day-one utility</div>
                                                <div class="application-card__text">We're more than just avatars — we're building a universe where you're the hero of your own story. With our interoperable, customizable identities, you can be whoever you want, wherever you go</div>
                                            </div>
                                        </div>

                                        <div class="application__item">
                                            <div class="application-card">
                                                <div class="application-card__icon">
                                                    <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-point2"></use></svg>
                                                </div>

                                                <div class="application-card__title">Fully customizable avatars</div>
                                                <div class="application-card__text">Your avatar is a canvas for limitless self-expression. Customize every detail to match your style, personality, vibe and evolve it as you grow</div>
                                            </div>
                                        </div>

                                        <div class="application__item">
                                            <div class="application-card">
                                                <div class="application-card__icon">
                                                    <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-point3"></use></svg>
                                                </div>

                                                <div class="application-card__title">Cross-world interoperability</div>
                                                <div class="application-card__text">Take your avatar with you wherever you go —explore new virtual worlds and games without ever losing your unique identity</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="application__col application__col--img">
                                    <div class="application__image">
                                        <img src="/assets/images/avatar-2.png" alt="" />
                                    </div>
                                </div>

                                <div class="application__col application__col--right">
                                    <div class="application__list">
                                        <div class="application__item">
                                            <div class="application-card">
                                                <div class="application-card__icon">
                                                    <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-point4"></use></svg>
                                                </div>

                                                <div class="application-card__title">Proven avatar tech with massive scale</div>
                                                <div class="application-card__text">With 10+ years of experience and 1M+ active users on the Ready Player Me platform, we onboard the next generation of consumers to avatar tech that’s powered by the blockchain</div>
                                            </div>
                                        </div>

                                        <div class="application__item">
                                            <div class="application-card">
                                                <div class="application-card__icon">
                                                    <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-point5"></use></svg>
                                                </div>

                                                <div class="application-card__title">Level up your experience</div>
                                                <div class="application-card__text">Evolve your avatar as you journey through games and worlds, unlocking new abilities, features, and customizations as you go</div>
                                            </div>
                                        </div>

                                        <div class="application__item">
                                            <div class="application-card">
                                                <div class="application-card__icon">
                                                    <svg class="svg-icon" viewBox="0 0 32 32" width="32" height="32" style="width: 32rem; height: 32rem;"><use xlink:href="#svg-point6"></use></svg>
                                                </div>

                                                <div class="application-card__title">Rare & unique collectibles</div>
                                                <div class="application-card__text">Discover rare and exclusive collectibles that set you apart, giving your avatar a unique look that’s truly yours</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="application__scins">
                                <div class="scins">
                                    <div class="scins__list">
                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/00.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/01.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img scins__img--icon">
                                                <img src="/assets/images/scins/icon-star.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/01.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/00.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/01.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/00.png" alt="" />
                                            </div>
                                        </div>


                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/01.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/00.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/01.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/00.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img scins__img--icon">
                                                <img src="/assets/images/scins/icon-triangle.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/00.png" alt="" />
                                            </div>
                                        </div>

                                        <div class="scins__item">
                                            <div class="scins__img">
                                                <img src="/assets/images/scins/01.png" alt="" />
                                            </div>
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

    </Layout>
}
