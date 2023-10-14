import LoadingDots from "@/components/loadingDots/loadingDots";
import styles from "./inStock.module.css";
import { useEffect, useState } from "react";

const InStock = ({ product }) => {
  const [message, setMessage] = useState("In stock, ready to ship");

  useEffect(() => {
    if (product.stock_level >= 3) {
      setMessage(message);
    } else if (product.stock_level < 3 && product.stock_level > 0) {
      setMessage(`Low stock - ${product.stock_level} item left`);
    } else {
      setMessage("sold out");
    }
  }, [product]);

  if (!message) {
    return <LoadingDots />;
  }

  if (message.includes("sold out")) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span
          className={styles.ring}
          style={{
            border: `${
              product.stock_level >= 3
                ? "3px solid #62bd19"
                : "3px solid #f4af29"
            }`,
          }}
        ></span>
        <span
          className={styles.circle}
          style={{
            backgroundColor: `${
              product.stock_level >= 3 ? "#62bd19" : "#f4af29"
            }`,
          }}
        ></span>
      </div>
      <small>{message}</small>
    </div>
  );
};

export default InStock;
