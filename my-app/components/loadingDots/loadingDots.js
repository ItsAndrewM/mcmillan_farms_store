import styles from "./loadingDots.module.css";

const LoadingDots = () => {
  return (
    <div className={styles.container}>
      <span className={styles.wrapper}>
        <span />
        <span />
        <span />
      </span>
    </div>
  );
};

export default LoadingDots;
