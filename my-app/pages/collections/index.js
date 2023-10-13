import Layout from "@/components/ui/layout/layout";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import { getPaginatedProducts } from "@/lib/operations-swell";
import styles from "@/styles/collections.module.css";
import { Suspense, useState } from "react";
import Loading from "./loading";
import { useAddItemToCart } from "@/lib/hooks/useAddItemToCart";
import { useUI } from "@/lib/uiContext";
import LoadingDots from "@/components/loadingDots/loadingDots";
import Filter from "@/components/filter/filter";
import Head from "next/head";
import ProductGrid from "@/components/blocks/productGrid/productGrid";

export async function getServerSideProps(context) {
  const pageNum = !context.query?.page ? 1 : context.query?.page;
  const sort = !context.query?.sort ? "price desc" : context.query?.sort;
  const products = await getPaginatedProducts(pageNum, sort);
  return {
    props: {
      //   page: page || null,
      products: products || null,
    },
  };
}

const Page = ({ products }) => {
  return (
    <Layout>
      <Head>
        <title>Products | McMillan Farms</title>
        <meta
          name="description"
          content="Everything McMillan Farms apparel and merchandise.  Get your limited edition, high quality leisure wear and make sure you look good on and off the farm."
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={layoutStyles.section}>
        <div className={styles.container}>
          <h1 style={{ textTransform: "uppercase" }}>Products</h1>
        </div>
        <Filter />
        {!products.length ? (
          <Loading />
        ) : (
          <div className={styles.container}>
            <ProductGrid items={products} />
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Page;
