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

export const getStaticPaths = async () => {
  const paths = await getAllProductPaths();
  return {
    paths: paths?.map((path) => `/product/${path}`) ?? [],
    fallback: false,
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
  };
};

const Page = ({ product, cross_sells }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Add to Cart");

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
        }, 2000);
      }
      openSidebar();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  if (!product && !cross_sells) {
    return (
      <Layout>
        <LoadingDots />
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
            <div
              className={styles.container}
              style={{
                borderBottom: "2px solid var(--cream)",
                paddingBottom: "1em",
              }}
            >
              <h1 className={utilStyles.uppercase}>{product.name}</h1>
              <p>
                {product.currency} ${product.price.toFixed(2)}
              </p>
              <small>Shipping calculated at checkout</small>
            </div>
            <div className={styles.container}>
              <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
                Quantity
              </small>
              <Quantity quantity={quantity} setQuantity={setQuantity} />
              <InStock product={product} />
            </div>
            <div className={styles.container}>
              <button name="add-to-cart" disabled={loading} onClick={addToCart}>
                {loading ? <LoadingDots /> : <span>{buttonText}</span>}
              </button>
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
                        depending on your in Canada you're located.
                      </p>
                    </div>
                    <div>
                      <p style={{ fontWeight: "bold" }}>
                        International Shipping
                      </p>
                      <p>
                        Currently, we're only offering local pick up and Canada
                        wide shipping.
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
        </div>
      </section>
    </Layout>
  );
};

export default Page;
