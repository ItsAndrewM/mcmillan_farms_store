import Checkmark from "@/components/icons/checkmark";
import styles from "./pickup.module.css";
import Cross from "@/components/icons/cross";

const Pickup = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      {product.stock_status === "in_stock" ? (
        <>
          <div style={{ width: "20px", height: "20px" }}>
            <Checkmark />
          </div>
          <div>
            <p>Pickup available at McMillan Farms</p>
            <small>Usually ready in 2-4 days </small>
          </div>
        </>
      ) : (
        <>
          <div style={{ color: "red" }}>
            <Cross width={20} height={20} />
          </div>
          <div>
            <p>Pickup currently unavailable at Wilson FOF Warehouse</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Pickup;
