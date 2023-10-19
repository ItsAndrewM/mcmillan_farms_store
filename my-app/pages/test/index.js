import Layout from "@/components/ui/layout/layout";
import { getPaginatedProducts } from "@/lib/operations-swell";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import styles from "@/styles/test.module.css";
import arrowRight from "@/assets/icons/arrowRight.svg";
import arrowLeft from "@/assets/icons/arrowLeft.svg";

export const getServerSideProps = async (context) => {
  const pageNum = !context.query?.page ? 1 : context.query?.page;
  const sort = !context.query?.sort ? "price desc" : context.query?.sort;
  const products = await getPaginatedProducts(pageNum, sort);

  return {
    props: {
      products: products || null,
    },
  };
};

const Page = ({ products }) => {
  const [pixels, setPixels] = useState(0);

  const handleDecrease = (e) => {
    e.preventDefault();
    if (pixels >= 250) {
      setPixels(pixels - 250);
    }
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    if (pixels < 750) {
      setPixels(pixels + 250);
    }
  };

  return (
    <Layout>
      <div>Test</div>

      <Suspense fallback={<p>Loading...</p>}>
        <div className={styles.container}>
          <button onClick={handleDecrease} className={styles.button}>
            <Image
              src={arrowLeft}
              height={24}
              width={24}
              alt="previous button"
            />
          </button>
          <ul className={styles.wrapper}>
            {products.map((product) => {
              return (
                <li key={product.id} style={{ right: `${pixels}px` }}>
                  <Image
                    src={product.images[0].file.url}
                    width={250}
                    height={250}
                    alt={product.name}
                  />
                </li>
              );
            })}
          </ul>
          <button onClick={handleIncrease} className={styles.button}>
            <Image src={arrowRight} height={24} width={24} alt="next button" />
          </button>
        </div>
      </Suspense>
    </Layout>
  );
};

export default Page;
