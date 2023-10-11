import LoadingDots from "@/components/loadingDots/loadingDots";
import styles from "./inStock.module.css";
import { useEffect, useState } from "react";

const InStock = ({ product }) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    const setStockMessage = () => {
      let msg;
      switch (product.stock_status) {
        case "in_stock":
          msg = "In stock, ready to ship";
          break;
        case "out_of_stock":
          msg = "Out of stock, try again later";
          break;
      }
      setMessage(msg);
    };
    setStockMessage();
  }, []);

  if (!message) {
    return <LoadingDots />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.ring}></span>
        <span className={styles.circle}></span>
      </div>
      <small>{message}</small>
    </div>
  );
};

export default InStock;
