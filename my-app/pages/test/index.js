import Layout from "@/components/ui/layout/layout";
import { getPaginatedProducts } from "@/lib/operations-swell";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import styles from "@/styles/test.module.css";
import arrowRight from "@/assets/icons/arrowRight.svg";
import arrowLeft from "@/assets/icons/arrowLeft.svg";
import Modal from "@/components/ui/modal/modal";

// export const getServerSideProps = async (context) => {
//   const pageNum = !context.query?.page ? 1 : context.query?.page;
//   const sort = !context.query?.sort ? "price desc" : context.query?.sort;
//   const products = await getPaginatedProducts(pageNum, sort);

//   return {
//     props: {
//       products: products || null,
//     },
//   };
// };

const Page = () => {
  return (
    <Layout>
      <Modal />
    </Layout>
  );
};

export default Page;
