import Head from "next/head";
import Layout from "@/components/ui/layout/layout";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import Hero from "@/components/blocks/hero/hero";
import hero from "@/assets/images/assets/tractor_trailer.jpg";
import RecentlyAdded from "@/components/blocks/recentlyAdded/recentlyAdded";
import { getNewProducts } from "@/lib/operations-swell";
import ContactUs from "@/components/blocks/contactUs/contactUs";
import CtaLeftColoured from "@/components/blocks/ctaLeftColoured/ctaLeftColoured";
import sideBySide from "@/assets/images/apparel/headwear/hat_black_white_black.jpg";

export const getStaticProps = async () => {
  const products = await getNewProducts();

  return {
    props: {
      products: products || null,
    },
  };
};

export default function Home({ products }) {
  const siteTitle = "Shop Online | McMillan Farms Apparel";
  const siteDesc =
    "Everything McMillan Farms - apparel, headwear, accessories. Making sure you look good on and off the farm.";
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} key="desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://shop.mcmillanfarms.ca/" />
        <meta property="og:title" content={`${siteTitle}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={`${siteDesc}`} />
        <meta
          property="og:image"
          content="http://friendsoffelix.com/cdn/shop/files/Social_Share.png?v=1661400648"
        />
        <meta
          property="og:image:secure_url"
          content="https://friendsoffelix.com/cdn/shop/files/Social_Share.png?v=1661400648"
        />
        <meta property="og:image:width" content="1366" />
        <meta property="og:image:height" content="768" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteTitle}`} />
        <meta name="twitter:description" content={`${siteDesc}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        imageSrc={hero}
        header={"For on and off the farm"}
        linkText={"Shop Now"}
        link={"/collections"}
        altText={"farmer on a tractor pulling a trailer"}
      />
      <section className={layoutStyles.section}>
        <RecentlyAdded items={products} />
        <CtaLeftColoured
          imageSrc={sideBySide}
          headline={"Inspired by the farm"}
          desc={
            "We are proud to introduce our new line of apparel, featuring designs that reflect the heritage and history of our family farm. Our clothing is designed to withstand the challenges of farming, while also looking fashionable and comfortable."
          }
          altText={"2 people side be side wearing farm hats"}
          tag={"Making sure you look good on and off the farm"}
        />
        <ContactUs
          para={"Have a question?"}
          link={"/contact-us"}
          linkText={"Contact Us"}
          small={
            "We're happy to answer any questions you may have about our products or any other general inquiries. Send us a note!"
          }
        />
      </section>
    </Layout>
  );
}
