import styles from "@/styles/collections.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.grid}>
        <li className={`${styles.item} ${styles.skeletonGap}`}>
          <div className={styles.skeletonItem}></div>
          <div className={styles.skeltonName}></div>
          <div className={styles.skeletonPrice}></div>
        </li>
        <li className={`${styles.item} ${styles.skeletonGap}`}>
          <div className={styles.skeletonItem}></div>
          <div className={styles.skeltonName}></div>
          <div className={styles.skeletonPrice}></div>
        </li>{" "}
        <li className={`${styles.item} ${styles.skeletonGap}`}>
          <div className={styles.skeletonItem}></div>
          <div className={styles.skeltonName}></div>
          <div className={styles.skeletonPrice}></div>
        </li>{" "}
        <li className={`${styles.item} ${styles.skeletonGap}`}>
          <div className={styles.skeletonItem}></div>
          <div className={styles.skeltonName}></div>
          <div className={styles.skeletonPrice}></div>
        </li>
      </ul>
    </div>
  );
};

export default Loading;
