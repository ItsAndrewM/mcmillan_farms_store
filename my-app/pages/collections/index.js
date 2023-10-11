import Layout from "@/components/ui/layout/layout";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import { getPaginatedProducts } from "@/lib/operations-swell";
import styles from "@/styles/collections.module.css";
import { Suspense, useState } from "react";
import Loading from "./loading";
import { useAddItemToCart } from "@/lib/hooks/useAddItemToCart";
import { useUI } from "@/lib/uiContext";
import LoadingDots from "@/components/loadingDots/loadingDots";
import Image from "next/image";
import Filter from "@/components/filter/filter";
import Head from "next/head";
import Link from "next/link";

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
  const [loading, setLoading] = useState(false);
  const addItem = useAddItemToCart();
  const { openSidebar } = useUI();

  const addToCart = async (e) => {
    setLoading(true);
    try {
      await addItem(e.target.value, 1);
      // openSidebar();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  console.log(products);
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
          <h1>Products</h1>
        </div>
        <Filter />
        <div className={styles.container}>
          {/* <Suspense fallback={<Loading />}> */}
          <ul className={styles.grid}>
            {products.map((product) => {
              return (
                <li key={product.id} className={styles.item}>
                  <Link href={`/collections/${product.slug}`}>
                    <div>
                      <Image
                        src={
                          !product.images.length
                            ? `https://placehold.co/375/jpeg`
                            : product.images[0].file.url
                        }
                        width={375}
                        height={375}
                      />
                    </div>
                  </Link>
                  <Link href={`/collections/${product.slug}`}>
                    <h3>{product.name}</h3>
                  </Link>
                  <Link href={`/collections/${product.slug}`}>
                    <small>
                      {product.currency}${product.price.toFixed(2)}
                    </small>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* </Suspense> */}
        </div>
      </section>
    </Layout>
  );
};

export default Page;
