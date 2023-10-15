import Layout from "@/components/ui/layout/layout";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import utilStyles from "@/styles/utils.module.css";
const LayoutPolicies = ({ children }) => {
  const router = useRouter();
  const [path, setPath] = useState(
    router.asPath
      .split("/")
      [router.asPath.split("/").length - 1].replace(/-/g, " ")
  );

  useEffect(() => {
    const index = path.indexOf(" ");
    const newPath =
      path.charAt(0).toUpperCase() +
      path.substring(1, index) +
      " " +
      path.charAt(index + 1).toUpperCase() +
      path.substring(index + 2, path.length);
    console.log(newPath);
    setPath(newPath);
  }, [path]);

  return (
    <Layout>
      <Head>
        <title>{`${path} | McMillan Farms`}</title>
        <meta
          name="description"
          content={`McMillan Farms ${path}`}
          key="desc"
        />
      </Head>
      <section className={layoutStyles.section}>
        <h1 className={utilStyles.uppercase}>{path}</h1>
        {children}
      </section>
    </Layout>
  );
};

export default LayoutPolicies;
