import { useRouter } from "next/router";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import Layout from "@/components/ui/layout/layout";
import { getAllProductPaths, getProduct } from "@/lib/operations-swell";
import Image from "next/image";
import LoadingDots from "@/components/loadingDots/loadingDots";
import styles from "@/styles/product.module.css";
import Quantity from "@/components/blocks/quantity/quantity";
import { useState } from "react";
import InStock from "@/components/blocks/inStock/inStock";
import Pickup from "@/components/blocks/pickup/pickup";

export const getStaticPaths = async () => {
  const paths = await getAllProductPaths();

  return {
    paths: paths?.map((path) => `/collections/${path}`) ?? [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const product = await getProduct({
    slug: params?.slug,
  });
  return {
    props: {
      //   page: page || null,
      product: product || null,
    },
  };
};

const Page = ({ product }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <LoadingDots />
      </Layout>
    );
  }
  return (
    <Layout>
      <section className={layoutStyles.section}>
        <div className={styles.wrapper}>
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
            <div className={styles.container}>
              <h1>{product.name}</h1>
              <p>
                {product.currency} ${product.price.toFixed(2)}
              </p>
              <small>Shipping calculated at checkout</small>
            </div>
            <div className={styles.container}>
              <small>Quantity</small>
              <Quantity quantity={quantity} setQuantity={setQuantity} />
              <InStock product={product} />
            </div>
            <div className={styles.container}>
              <button>Add to cart</button>
            </div>
            <div className={styles.container}>
              <Pickup product={product} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
