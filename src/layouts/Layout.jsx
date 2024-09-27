// import '@/styles/styles.scss'; // global styles
import SvgIcons from '../components/SvgIcons.jsx';

const Layout = ({ children, title, bodyClass }) => {
    return <html lang="ru">
        <head>
            <meta charset="UTF-8" />
            {/* <meta name="description" content={title} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="apple-mobile-web-app-capable" content="yes" /> */}

            {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
           {/*  <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png" />
            <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
            <link rel="icon" type="image/png" href="/favicons/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/favicons/favicon-128x128.png" sizes="128x128" />
            <meta name="application-name" content="&nbsp;"/>
            <meta name="msapplication-TileColor" content="#FFFFFF" />
            <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
            <meta name="msapplication-square70x70logo" content="/favicons/mstile-70x70.png" />
            <meta name="msapplication-square150x150logo" content="/favicons/mstile-150x150.png" />
            <meta name="msapplication-wide310x150logo" content="/favicons/mstile-310x150.png" />
            <meta name="msapplication-square310x310logo" content="/favicons/mstile-310x310.png" /> */}

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />

            <meta name="generator" content='Ancros dev kit' />
            <title>{title}</title>
            <link href="/assets/styles/styles.css" rel="stylesheet" />

            {/* <style __html={`
                    body {
                        font-family: Arial, Helvetica, sans-serif;
                        color: #fff;
                        background-color: #0f101c;
                        padding: 140px 80px;
                    }
                `}>
            </style> */}
        </head>
        <body class={bodyClass}>
            <SvgIcons />
            {children}

            {/* <script src="/assets/js/app.js"></script> */}
        </body>
    </html>
};

export default Layout;
