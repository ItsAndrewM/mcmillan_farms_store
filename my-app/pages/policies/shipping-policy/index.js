import LayoutPolicies from "../layout";
import styles from "@/styles/policies.module.css";
import utilStyles from "@/styles/utils.module.css";

const Page = () => {
  const timeframe = "2-4 business days";
  const shippingTimeFrame = "3-10 business days";
  return (
    <LayoutPolicies>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
            Order Processing
          </small>
          <small>
            Please allow {timeframe} to process your order. Expect an email
            within
            {timeframe} to let you know your order is on the way!
          </small>
        </div>
        <div className={styles.text}>
          <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
            Standard Shipping (Canada)
          </small>
          <small>
            We ship across Canada using Canada Post. Orders will likely be
            shipped within {timeframe} of ordering. All shipping times are
            estimated to be {shippingTimeFrame}, depending on your in Canada
            you&apos;re located.
          </small>
        </div>
        <div className={styles.text}>
          <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
            Flat Rate Shipping
          </small>
          <small>
            Orders are generally shipped within {timeframe}
            using Canada Post&apos;s delivery standard is {shippingTimeFrame}.
            Flat rate shipping fee of $15.00 applies to orders shipping to
            Canada. There is an option Express Shipping Flat Rate option at
            $35.00 which can be selected at checkout. We do not ship outside of
            Canada at this time.
          </small>
        </div>
        <div className={styles.text}>
          <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
            Local Pickup
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
