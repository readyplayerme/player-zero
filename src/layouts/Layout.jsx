// import '@/styles/styles.scss'; // global styles
import SvgIcons from '../components/SvgIcons.jsx';

const Layout = ({ children, title, bodyClass }) => {
    return <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="description" content={title} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="apple-mobile-web-app-capable" content="yes" />

            {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
            <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/assets/favicons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/favicons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/favicons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/favicons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/assets/favicons/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/assets/favicons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/assets/favicons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/assets/favicons/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="/assets/favicons/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="/assets/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="/assets/favicons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/assets/favicons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/assets/favicons/favicon-128x128.png" sizes="128x128" />
            <meta name="application-name" content="&nbsp;"/>
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="/assets/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="/assets/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="/assets/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="/assets/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="/assets/favicons/mstile-310x310.png" />

            <meta property="og:title" content="Avatar Collectible Platform" />
            <meta property="og:description" content="We are the avatar collectible platform of the future, empowering users to create, customize and evolve their digital identities that can immediately be used to play games and explore endless virtual worlds." />
            <meta property="og:image" content="https://playerzero.me/assets/covers/cover.png"></meta>

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Avatar Collectible Platform" />
            <meta name="twitter:description" content="We are the avatar collectible platform of the future, empowering users to create, customize and evolve their digital identities that can immediately be used to play games and explore endless virtual worlds." />
            <meta name="twitter:image" content="https://playerzero.me/assets/covers/cover.png"></meta>

            <meta property="image" content="https://playerzero.me/assets/covers/cover.png"></meta>

            <title>{title}</title>

            <link href={`/assets/styles/styles.css?v=${+new Date()}`} rel="stylesheet" />
            <script src={`/assets/js/head.js?v=${+new Date()}`}></script>
            <script __raw={`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KMZ6M22L');
            `}></script>
        </head>
        <body data-elt="body" class={bodyClass}>
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMZ6M22L" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <div className="loader"></div>
            <SvgIcons />
            {children}

            <script src={`/assets/js/app.js?v=${+new Date()}`}></script>
        </body>
    </html>
};

export default Layout;
