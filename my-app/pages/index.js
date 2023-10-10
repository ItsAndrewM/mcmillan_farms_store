import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/ui/layout/layout";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      This is the store mcmillan farms
    </Layout>
  );
}
