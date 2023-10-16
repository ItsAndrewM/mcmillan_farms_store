import Layout from "@/components/ui/layout/layout";
import { getAllCollectionPaths, getCollection } from "@/lib/operations-swell";
import styles from "@/styles/collections.module.css";
import Head from "next/head";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import Filter from "@/components/filter/filter";
import ProductGrid from "@/components/blocks/productGrid/productGrid";
import Loading from "../loading";
import { Suspense } from "react";

export const getStaticPaths = async () => {
  const paths = await getAllCollectionPaths();

  return {
    paths: paths?.map((path) => `/collections/${path}`) ?? [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const category = await getCollection({
    handle: params?.category,
  });

  return {
    props: {
      //   page: page || null,
      category: category || null,
    },
  };
};

const Page = ({ category }) => {
  if (!category) {
    return <Loading />;
  }
  return (
    <Layout>
      <Head>
        <title>{`${category.name} | McMillan Farms`}</title>
        <meta
          name="description"
          content="Everything McMillan Farms apparel and merchandise.  Get your limited edition, high quality leisure wear and make sure you look good on and off the farm."
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={`${layoutStyles.section}`}>
        <div className={styles.container}>
          <h1 style={{ textTransform: "uppercase" }}>{category.name}</h1>
        </div>
        <Filter />
        <div className={styles.container}>
          <Suspense fallback={<Loading />}>
            <ProductGrid items={category.products} />
          </Suspense>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
