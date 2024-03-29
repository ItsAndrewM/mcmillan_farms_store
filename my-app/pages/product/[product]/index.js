import Layout from "@/components/ui/layout/layout";
import { getAllProductPaths, getProduct } from "@/lib/operations-swell";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import LoadingDots from "@/components/loadingDots/loadingDots";
import styles from "@/styles/product.module.css";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import Quantity from "@/components/blocks/quantity/quantity";
import InStock from "@/components/blocks/inStock/inStock";
import Pickup from "@/components/blocks/pickup/pickup";
import utilStyles from "@/styles/utils.module.css";
import CtaLeftColoured from "@/components/blocks/ctaLeftColoured/ctaLeftColoured";
import sideBySide from "@/assets/images/apparel/headwear/hat_black_white_black.jpg";
import CrossSell from "@/components/blocks/crossSell/crossSell";
import Head from "next/head";
import { useAddItemToCart } from "@/lib/hooks/useAddItemToCart";
import { useUI } from "@/lib/uiContext";
import Loading from "./loading";
import ContactUs from "@/components/blocks/contactUs/contactUs";
import cartSidebarViewStyles from "@/components/cart/cartSidebarView/cartSidebarView.module.css";

export const getStaticPaths = async () => {
	const paths = await getAllProductPaths();
	return {
		paths: paths?.map((path) => `/product/${path}`) ?? [],
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params }) => {
	const product = await getProduct({
		slug: params?.product,
	});
	const cross_sells = [];
	if (product.cross_sells.length) {
		for (const crossSell of product.cross_sells) {
			const result = await getProduct({
				slug: crossSell?.product_id,
			});
			if (result && cross_sells.length <= 5) {
				cross_sells.push(result);
			}
		}
	}
	return {
		props: {
			product: product || null,
			cross_sells: cross_sells || null,
		},
		revalidate: 10,
	};
};

const Page = ({ product, cross_sells }) => {
	const router = useRouter();
	const [quantity, setQuantity] = useState(1);
	const [added, setAdded] = useState(false);
	const [loading, setLoading] = useState(false);
	const [buttonText, setButtonText] = useState("Add to Cart");
	const { openSidebar } = useUI();

	const addItem = useAddItemToCart();

	const addToCart = async () => {
		setLoading(true);
		try {
			await addItem(product.id, quantity);
			setAdded(true);
			if (added) {
				setButtonText("Added");
				setTimeout(() => {
					setButtonText("Add to Cart");
					setAdded(false);
				}, 4000);
			}
			openSidebar();
			setLoading(false);
		} catch (err) {
			console.log(err);
			setLoading(false);
		}
	};

	if (router.isFallback && !product && !cross_sells) {
		return (
			<Layout>
				<Loading />
			</Layout>
		);
	}
	return (
		<Layout>
			<Head>
				<title>{`${product.name} | McMillan Farms`}</title>
				<meta
					name="description"
					content={`${product.description}`}
					key="desc"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className={`${layoutStyles.section} ${utilStyles.gap2}`}>
				<div className={styles.wrapper} key={product.id}>
					<div>
						<Image
							alt={product.name}
							src={
								!product.images.length
									? `https://placehold.co/475/jpeg`
									: product.images[0].file.url
							}
							width={475}
							height={475}
						/>
					</div>
					<div>
						<div
							className={styles.container}
							style={{
								borderBottom: "2px solid var(--cream)",
								paddingBottom: "1em",
							}}
						>
							<h1 className={utilStyles.uppercase}>{product.name}</h1>
							{!product.orig_price ? (
								<p>
									{product.currency} ${product.price.toFixed(2)}
								</p>
							) : (
								<>
									<p className={styles.saleBadge}>ON SALE</p>
									<p>
										<span className={styles.originalPrice}>
											{product.currency} ${product.orig_price.toFixed(2)}
										</span>
										<span className={styles.onSale}>
											{product.currency} ${product.price.toFixed(2)}
										</span>
									</p>
								</>
							)}

							<small>Shipping calculated at checkout</small>
						</div>
						<div className={styles.container}>
							<small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
								Quantity
							</small>
							<Quantity
								quantity={quantity}
								setQuantity={setQuantity}
								stock_level={product.stock_level}
								min={1}
							/>
							<InStock product={product} />
						</div>
						<div className={styles.container}>
							{product.stock_status.includes("out_of_stock") ? (
								<span className={`${styles.soldOut} ${utilStyles.uppercase}`}>
									Sold out
								</span>
							) : (
								<button
									name="add-to-cart"
									disabled={loading}
									onClick={addToCart}
									className={`${cartSidebarViewStyles.checkout} ${styles.checkout}`}
								>
									{loading ? <LoadingDots /> : <span>{buttonText}</span>}
								</button>
							)}
						</div>
						<div className={styles.container}>
							<Pickup product={product} />
						</div>
						<div className={`${styles.container} `}>
							<p className={styles.headline}>Description</p>
							<div dangerouslySetInnerHTML={{ __html: product.description }} />
						</div>
						<div className={styles.container}>
							<div>
								<details className={`${styles.accordian}`}>
									<summary>Shipping Information</summary>
								</details>
								<div className={styles.content}>
									<div className={styles.textWrapper}>
										<div>
											<p style={{ fontWeight: "bold" }}>Processing Time</p>
											<p>Standard Shipping (Canada)</p>
											<p>
												You can pick up your order from our farm at #1 3690
												Berard Rd, Kelowna, BC V1W 4A91. Please select the local
												pickup option at checkout and we will contact you to
												arrange a convenient time. Canada Wide Shipping We ship
												across Canada using Canada Post. Orders will likely be
												shipped within 1-2 business days of ordering. All
												shipping times are estimated to be 3-10 business days,
												depending on your in Canada you&apos;re located.
											</p>
										</div>
										<div>
											<p style={{ fontWeight: "bold" }}>
												International Shipping
											</p>
											<p>
												Currently, we&apos;re only offering local pick up and
												Canada wide shipping.
											</p>
										</div>
										<div>
											<p style={{ fontWeight: "bold" }}>Shipping rates</p>
											<p>
												Rates for many items are a flat rate depending on your
												location in Canada.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.wrapper}>
					<CtaLeftColoured
						imageSrc={sideBySide}
						headline={"Inspired by the farm"}
						desc={
							"We are proud to introduce our new line of apparel, featuring designs that reflect the heritage and history of our family farm. Our clothing is designed to withstand the challenges of farming, while also looking fashionable and comfortable."
						}
						altText={"2 people side be side wearing farm hats"}
						tag={"Making sure you look good on and off the farm"}
					/>
				</div>
				<div
					className={`${styles.wrapper} ${utilStyles.columnFlex} ${utilStyles.alignCenter}`}
				>
					<CrossSell cross_sells={cross_sells} />
					<ContactUs
						para={"Have a question?"}
						link={"/contact-us"}
						linkText={"Contact Us"}
						small={
							"We're happy to answer any questions you may have about our products or any other general inquiries. Send us a note!"
						}
					/>
				</div>
			</section>
		</Layout>
	);
};

export default Page;
