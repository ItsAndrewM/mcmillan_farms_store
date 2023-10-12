import LoadingDots from "@/components/loadingDots/loadingDots";
import styles from "./crossSell.module.css";
import utilStyles from "@/styles/utils.module.css";
import CrossSellCard from "./crossSellCard/crossSellCard";

const CrossSell = ({ cross_sells }) => {
  if (!cross_sells.length) {
    return <LoadingDots />;
  }
  return (
    <>
      <h3 className={utilStyles.uppercase}>You may also like</h3>
      <ul className={styles.grid}>
        {cross_sells.map((item) => {
          return <CrossSellCard item={item} key={item.id} />;
        })}
      </ul>
    </>
  );
};

export default CrossSell;
