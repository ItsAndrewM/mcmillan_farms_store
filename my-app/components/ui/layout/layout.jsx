import Head from "next/head";
import styles from "./layout.module.css";
import Script from "next/script";
import NavBar from "../header/navbar/navbar";
import Sidebar from "@/components/cart/sidebar/sidebar";
import CartSidebarView from "@/components/cart/cartSidebarView/cartSidebarView";
import { ManagedUIContext, useUI } from "@/lib/uiContext";
import swellConfig from "@/config/swell.config";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import { CommerceProvider } from "@/lib/commerceProvider";
import Modal from "../modal/modal";

const Layout = ({ children, home }) => {
	const { displaySidebar, closeSidebar } = useUI();
	const [showModal, setShowModal] = useState(false);
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
			<NavBar setShowModal={setShowModal} />
			<Modal setShowModal={setShowModal} showModal={showModal} />

			<main className={` ${home ? styles.home : styles.main}`}>{children}</main>
			<Sidebar open={displaySidebar} onClose={closeSidebar}>
				<CartSidebarView />
			</Sidebar>
			<Footer />
		</>
	);
};

export default Layout;
