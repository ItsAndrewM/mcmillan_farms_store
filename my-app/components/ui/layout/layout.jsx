import Head from "next/head";
import styles from "./layout.module.css";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Andrew McMillan's Portfolio" />
        <meta
          property="og:image"
          content={`https://mcmillanfarms.xyz/api/og`}
        />
        <meta name="og:title" content="Andrew McMillan's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="google-analytics-container">
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5H4S7683HG"
        />
        <Script id="google-analytics">
          {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'G-5H4S7683HG');`}
        </Script>
      </div>

      {/* <Navbar /> */}
      <main className={styles.main}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
