import LoadingDots from "@/components/loadingDots/loadingDots";
import Layout from "@/components/ui/layout/layout";
import {
  getAllProductPaths,
  getPaginatedProducts,
} from "@/lib/operations-swell";
import Link from "next/link";
import { redirect } from "next/navigation";

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
      <div>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <Link href={`/product/${product.slug}`}>{product.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Page;
