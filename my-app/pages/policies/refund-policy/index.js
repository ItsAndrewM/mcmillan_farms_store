import Layout from "@/components/ui/layout/layout";
import LayoutPolicies from "../layout";
import utilStyles from "@/styles/utils.module.css";
import styles from "@/styles/policies.module.css";

const Page = () => {
  return (
    <LayoutPolicies>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <small>
            We have a 30-day return policy, which means you have 30 days after
            receiving your item to request a return.
          </small>
          <small>
            To be eligible for a return, your item must be in the same condition
            that you received it, unworn or unused, with tags, and in its
            original packaging. You'll also need the receipt or proof of
            purchase.
          </small>
          <small>
            To start a return, you can contact us at
            information@mcmillanfarms.ca. Please note that returns will need to
            be sent to the following address: 1-3690 Bearad Road, Kelowna, BC,
            V1W4A9, Canada. If your return is accepted, we&apos;ll send you a
            return shipping label, as well as instructions on how and where to
            send your package. Items sent back to us without first requesting a
            return will not be accepted.
          </small>
          <small>
            You can always contact us for any return questions at
            information@mcmillanfarms.ca.
          </small>
        </div>
        <div className={styles.text}>
          <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
            Damages and Issues
          </small>
          <small>
            Please inspect your order upon receipt and contact us immediately if
            the item is defective, damaged, or if you receive the wrong item, so
            that we may evaluate the issue and make it right.
          </small>
          <small>
            Unfortunately, we cannot accept returns on sale items or gift cards.
          </small>
        </div>
        <div className={styles.text}>
          <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
            Exchanges
          </small>
          <small>
            The fastest way to ensure you get what you want is to return the
            item you have, and once the return is accepted, make a separate
            purchase for the new item.
          </small>
        </div>
        <div className={styles.text}>
          <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
            Refunds
          </small>
          <small>
            We will notify you once we&apos;ve received and inspected your
            return to let you know if the refund was approved or not. If
            approved, you&apos;ll be automatically refunded on your original
            payment method within 10 business days. Please remember it can take
            some time for your bank or credit card company to process and post
            the refund too.
          </small>
          <small>
            If more than 15 business days have passed since we&apos;ve approved
            your return, please contact us at information@mcmillanfarms.ca.
          </small>
        </div>
      </div>
    </LayoutPolicies>
  );
};

export default Page;
