import Layout from '../layouts/Layout.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default async ({ data }) => {
    // inline request example
    // const apiResponse = await fetch(process.env.URL + '/api/200.json').then(r => r.json()).catch(e => e.message);
    // console.log('In JSX fetch inside component happens on component request', apiResponse);
    return <Layout title="Player Zero">
        <div class="wrapper">
            {/* <div class="preloader">
                <div class="preloader__progress"><span></span></div>
            </div> */}

            <Header />

            <main class="main">
                <section class="intro">
                    {/* <div class="intro__bg">
                        <video muted loop playsinline autoplay src="/assets/images/intro-video.mp4" type="video/mp4"></video>
                        <img src="/assets/images/intro-bg.png" alt="" />
                    </div> */}

                    <div class="intro__container">
                        <div class="intro__wrap">
                            <div class="intro__main">
                                <div class="intro__content">
                                    <h1 class="intro__title">AVATAR  COLLECTIBLE <br/>PLATFORM</h1>
                                    <h3 class="intro__subtitle">Bringing Your Identity <br/>
                                    to Every World</h3>
                                </div>

                                <div class="intro__button">
                                    <button class="button-play">
                                        <svg class="svg-icon svg-icon--icon" viewBox="0 0 105 43" width="105" height="43"><use xlink:href="#svg-play-icon"></use></svg>
                                        <svg class="svg-icon svg-icon--text" viewBox="0 0 101 38" width="101" height="38"><use xlink:href="#svg-play-text"></use></svg>
                                    </button>
                                </div>
                            </div>

                            <div class="intro__bottom">
                                <div class="intro__form">
                                    <form action="" class="form form--intro">
                                        <div class="form__box">
                                            <div class="form__field form__field--input">
                                                <input type="mail" class="form__input" placeholder='YOUR E-MAIL'/>

                                                <div class="form-message"></div>
                                            </div>

                                            <div class="form__field form__field--button">
                                                <button class="form__button button" type='submit'>
                                                    <svg class="svg-icon" viewBox="0 0 36 32" width="36" height="32"><use xlink:href="#svg-angle-right"></use></svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div class="form-success"></div>
                                        <div class="form-response"></div>
                                    </form>
                                </div>

                                <div class="intro__scroll">
                                    <span>SCROLL</span>
                                    <svg class="svg-icon" viewBox="0 0 18 18" width="18" height="18" style="width: 18rem; height: 18rem;"><use xlink:href="#svg-arrow-down"></use></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="homepage">
                    <div class="homepage__container">
                        <div class="homepage__wrap">
                            <div class="homepage__logo">
                                <svg class="svg-icon" viewBox="0 0 200 72" width="400" height="144"><use xlink:href="#svg-logo"></use></svg>
                            </div>

                            <div className="homepage__text">
                                <p>PlayerZero is the avatar collectible platform of the future, empowering users to create, customize, and evolve their digital identities across virtual worlds and games.</p>
                                <p>Built by Ready Player Me — a platform trusted by over 4,000 developers and millions of users globally — PlayerZero breaks the barriers of closed ecosystems, offering avatars that are seamlessly interoperable between platforms, true ownership of your online identity, and utility from day one.</p>
                            </div>

                            <div class="homepage__image">
                                <img src="/assets/images/homepage-bg.png" alt="" />
                            </div>
                            {/* <div class="homepage__list">
                                <div class="homepage__item homepage__item--img">
                                    <div class="homepage__image homepage__image--left">
                                        <img class="homepage__image-img" src="/assets/images/girl.png" alt="" />
                                        <img class="homepage__image-line" src="/assets/images/hp-line.png" alt="" />
                                        <div class="hompage__light"></div>
                                    </div>
                                </div>

                                <div class="homepage__item homepage__item--text">
                                    <div class="homepage__text">PlayerZero is the avatar collectible platform of the future, empowering users to create, customize, and evolve their digital identities across virtual worlds and games.</div>
                                </div>

                                <div class="homepage__item homepage__item--img">
                                    <div class="homepage__image homepage__image--right">
                                        <img class="homepage__image-img" src="/assets/images/man.png" alt="" />
                                        <img class="homepage__image-line" src="/assets/images/hp-line.png" alt="" />
                                        <div class="hompage__light"></div>
                                    </div>
                                </div>

                                <div class="homepage__item homepage__item--text">
                                    <div class="homepage__text">Built by Ready Player Me — a platform trusted by over 4,000 developers and millions of users globally — PlayerZero breaks the barriers of closed ecosystems, offering avatars that are seamlessly interoperable between platforms, true ownership of your online identity, and utility from day one.</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

                <section class="process">
                    <div class="process__container">
                        <div class="process__wrap">
                            <h2 class="process__title">how it works</h2>

                            <div class="process__list">
                                <div class="process__item">
                                    <div class="process-card">
                                        <div class="process-card__img">
                                            <img src="/assets/images/process/00.png" alt="" />
                                        </div>

                                        <div class="process-card__content">
                                            <div class="process-card__icon">
                                                <img src="/assets/images/process/step0.svg" alt="" />
                                            </div>

                                            <h3 class="process-card__title">Collect Packs</h3>
                                            <div class="process-card__text">
                                                <p>Take part in regular pack drops from artists and brands. Each pack contains digital wearables for your avatar</p>
                                                <p>Follow us on X and join our Discord to stay in the loop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="process__item">
                                    <div class="process-card">
                                        <div class="process-card__img">
                                            <img src="/assets/images/process/01.png" alt="" />
                                        </div>

                                        <div class="process-card__content">
                                            <div class="process-card__icon">
                                                <img src="/assets/images/process/step1.svg" alt="" />
                                            </div>

                                            <h3 class="process-card__title">Reveal Digital Collectibles</h3>
                                            <div class="process-card__text">
                                                <p>The packs reveal collectibles with different styles and rarities. If you're lucky, you might get something rare.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="process__item">
                                    <div class="process-card">
                                        <div class="process-card__img">
                                            <img src="/assets/images/process/02.png" alt="" />
                                        </div>

                                        <div class="process-card__content">
                                            <div class="process-card__icon">
                                                <img src="/assets/images/process/step2.svg" alt="" />
                                            </div>

                                            <h3 class="process-card__title">Customize Your Avatar</h3>
                                            <div class="process-card__text">
                                                <p>Create your avatar from a selfie and customize it with free assets or digital collectibles from packs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="process__item">
                                    <div class="process-card">
                                        <div class="process-card__img">
                                            <img src="" alt="" />
                                        </div>

                                        <div class="process-card__content">
                                            <div class="process-card__icon">
                                                <img src="/assets/images/process/step3.svg" alt="" />
                                            </div>

                                            <h3 class="process-card__title">Play and Explore</h3>
                                            <div class="process-card__text">
                                                <p>Use your avatar to play in a multitude of games built by many developers.  We're on a mission to bring your avatar to every virtual world .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="process__item">
                                    <div class="process-card">
                                        <div class="process-card__img">
                                            <img src="/assets/images/process/04.png" alt="" />
                                        </div>
                                        <div class="process-card__content">
                                            <div class="process-card__icon">
                                                <img src="/assets/images/process/step4.svg" alt="" />
                                            </div>

                                            <h3 class="process-card__title">Own Your Identity, Everywhere</h3>
                                            <div class="process-card__text">
                                                <p>Generate a profile picture of your avatar and use it across social platforms. Avatar stickers for chat coming soon!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="about">
                    <div class="about__container">
                        <div class="about__wrap">
                            <div class="about__block">
                                <h2 class="about__title">About us</h2>

                                <div class="about__image">
                                    <img src="/assets/images/about/about-1.png" alt="" />
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
                                <div class="about__image">
                                    <img src="/assets/images/about/about-2.png" alt="" />
                                </div>

                                <div class="about__main">
                                    <div class="about__logo">
                                        <img src="/assets/images/about/logo-rpm.svg" alt="" />
                                    </div>

                                    <div class="about__text">
                                        <p>Ready Player Me is an avatar tech leader delivering 10M+ avatars to games and apps every month. Our tech is currently used by 4,000 developers across the world. We offer avatar SDKs and APIs that developers can integrate effortlessly into their apps and games to build avatar systems and save time, boost engagement, and unlock new revenue streams with avatars. Our mission is to build bridges between virtual worlds to create a more open and unified digital experience for users.</p>
                                        <p>We’ve raised $72M from a16z, alongside a roster of tech, web3 and gaming leaders, including Punk 6529, gmoney, Snowfro, Sebastian Knutsson and Riccardo Zacconi (Co-founders of King), Justin Kan (Co-founder of Twitch) and Tom Preston-Werner (Co-founder of Github).</p>
                                    </div>

                                    <div class="about__partners about-partners">
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
            </main>

            <Footer />
        </div>

        {/* <div class="popup">
            <div class="popup__box">
                <button class="popup__close">
                    <svg class="svg-icon" viewBox="0 0 40 40" width="40" height="40" style="width: 40rem; height: 40rem;"><use xlink:href="#svg-close"></use></svg>
                </button>

                <div class="popup__main">
                    <div class="popup__video">
                        <div class="video">
                            <video src=""></video>
                            <button class="video__button"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

    </Layout>
}
