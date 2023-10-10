import Filter from "@/components/icons/filter";
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

export async function getServerSideProps(context) {
  const pageNum = !context.query?.page ? 1 : context.query?.page;
  const products = await getPaginatedProducts(pageNum);
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
      openSidebar();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  console.log(products);
  return (
    <Layout>
      <section className={layoutStyles.section}>
        <div className={styles.container}>
          <h1>Products</h1>
        </div>
        <div className={styles.container}>
          <div>
            <h3>filter</h3>
          </div>
        </div>
        <div className={styles.container}>
          {/* <Suspense fallback={<Loading />}> */}
          <ul className={styles.grid}>
            {products.map((product) => {
              return (
                <li key={product.id} className={styles.item}>
                  <div>
                    <Image
                      src={
                        !product.images.length
                          ? `https://placehold.co/250/jpeg`
                          : product.images[0].file.url
                      }
                      width={250}
                      height={250}
                    />
                  </div>
                  <h3>{product.name}</h3>
                  <small>
                    {product.currency}${product.price.toFixed(2)}
                  </small>
                  <button
                    name="add-to-cart"
                    disabled={loading}
                    onClick={addToCart}
                    value={product.id}
                  >
                    {loading ? <LoadingDots /> : <span>Add to cart</span>}
                  </button>
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
