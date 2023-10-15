import Layout from "@/components/ui/layout/layout";
import LayoutPolicies from "../layout";
import styles from "@/styles/policies.module.css";
import utilStyles from "@/styles/utils.module.css";

const Page = () => {
  return (
    <LayoutPolicies>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
            Standard Shipping (Canada)
          </small>
          <small>
            We ship across Canada using Canada Post. Orders will likely be
            shipped within 1-2 business days of ordering. All shipping times are
            estimated to be 3-10 business days, depending on your in Canada
            you&apos;re located.
          </small>
          <small>
            You can pick up your order from our farm at #1 3690 Berard Rd,
            Kelowna, BC V1W 4A91. Please select the local pickup option at
            checkout and we will contact you to arrange a convenient time.{" "}
          </small>
        </div>
      </div>
    </LayoutPolicies>
  );
};

export default Page;
