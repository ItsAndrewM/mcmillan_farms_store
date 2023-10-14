import Head from "next/head";
import styles from "./layout.module.css";
import Script from "next/script";
import NavBar from "../header/navbar/navbar";
import Sidebar from "@/components/cart/sidebar/sidebar";
import CartSidebarView from "@/components/cart/cartSidebarView/cartSidebarView";
import { ManagedUIContext, useUI } from "@/lib/uiContext";
import swellConfig from "@/config/swell.config";
import { useEffect } from "react";
import Footer from "../footer/footer";
import { CommerceProvider } from "@/lib/commerceProvider";

const Layout = ({ children, home }) => {
  const { displaySidebar, closeSidebar } = useUI();
  console.log(home);
  const siteTitle = "Shop Online | McMillan Farms Apparel";
  const siteDesc =
    "Everything McMillan Farms - apparel, headwear, accessories. Making sure you look good on and off the farm.";
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteDesc} />
        <meta
          property="og:image"
          content={`https://mcmillanfarms.xyz/api/og`}
        />
        <meta name="og:title" content={siteTitle} />
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

      <NavBar />
      <main className={` ${home ? styles.home : styles.main}`}>{children}</main>
      <Sidebar open={displaySidebar} onClose={closeSidebar}>
        <CartSidebarView />
      </Sidebar>
      <Footer />
    </>
  );
};

export default Layout;
