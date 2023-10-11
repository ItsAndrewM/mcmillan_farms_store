import Head from "next/head";
import Layout from "@/components/ui/layout/layout";
import layoutStyles from "@/components/ui/layout/layout.module.css";

export default function Home() {
  const siteTitle = "Shop Online | McMillan Farms Apparel";
  const siteDesc =
    "Everything McMillan Farms - apparel, headwear, accessories. Making sure you look good on and off the farm.";
  return (
    <Layout>
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
      <section className={layoutStyles.section}>
        This is the store mcmillan farms
      </section>
    </Layout>
  );
}
