import Layout from "@/components/ui/layout/layout";

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          test: "1",
        },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: { test: "12345" },
  };
};
const Page = ({ test }) => {
  return (
    <Layout>
      <div>[test]</div>
    </Layout>
  );
};

export default Page;
