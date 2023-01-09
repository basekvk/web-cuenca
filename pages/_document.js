
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <>
          {/* ========== Meta Tags ========== */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Ottrali - Construction Building Company"
          />
          {/* ========== Page Title ========== */}
          <title>Grupal SL - Poceros en Cuenca</title>
          {/* ========== Favicon Icon ========== */}
          <link
            rel="shortcut icon"
            href="assets/img/favicon.png"
            type="image/x-icon"
          />
          {/* ========== Start Stylesheet ========== */}
          <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
          <link
            href="/assets/css/flaticon-construction-set.css"
            rel="stylesheet"
          />
          <link href="/assets/css/magnific-popup.css" rel="stylesheet" />
          <link href="/assets/css/owl.carousel.min.css" rel="stylesheet" />
          <link href="/assets/css/owl.theme.default.min.css" rel="stylesheet" />
          <link href="/assets/css/animate.css" rel="stylesheet" />
          <link href="/assets/css/bootsnav.css" rel="stylesheet" />
          <link href="../styles/style.css" rel="stylesheet" />
          <link href="/assets/css/responsive.css" rel="stylesheet" />
          {/* ========== End Stylesheet ========== */}
          {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
          {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
          {/*[if lt IE 9]>


    <![endif]*/}
          {/* ========== Google Fonts ========== */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,900"
            rel="stylesheet"
          />
        </>
      </Head>
      <body>
        <script src="/assets/js/jquery-1.12.4.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/equal-height.min.js"></script>
        <script src="/assets/js/jquery.appear.js"></script>
        <script src="/assets/js/jquery.easing.min.js"></script>
        <script src="/assets/js/jquery.magnific-popup.min.js"></script>
        <script src="/assets/js/modernizr.custom.13711.js"></script>
        <script src="/assets/js/owl.carousel.min.js"></script>
        <script src="/assets/js/wow.min.js"></script>
        <script src="/assets/js/isotope.pkgd.min.js"></script>
        <script src="/assets/js/imagesloaded.pkgd.min.js"></script>
        <script src="/assets/js/count-to.js"></script>
        <script src="/assets/js/bootsnav.js"></script>
        <script src="/assets/js/main.js"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
