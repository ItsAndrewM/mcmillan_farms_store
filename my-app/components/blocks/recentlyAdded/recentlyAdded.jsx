import LoadingDots from "@/components/loadingDots/loadingDots";
import styles from "./recentlyAdded.module.css";
import RecentlyAddedCard from "./recentlyAddedCard/recentlyAddedCard";
import Link from "next/link";
import cartSideBarStyles from "@/components/cart/cartSidebarView/cartSidebarView.module.css";

const RecentlyAdded = ({ items }) => {
  if (!items.length) {
    return <LoadingDots />;
  }
  return (
    <div className={styles.box}>
      <h1>New Arrivals</h1>
      <ul className={styles.wrapper}>
        {items.map((item) => {
          return <RecentlyAddedCard item={item} key={item.id} />;
        })}
      </ul>
      <div>
        <Link
          href={"/collections"}
          className={`${cartSideBarStyles.checkout} ${styles.button}`}
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default RecentlyAdded;
