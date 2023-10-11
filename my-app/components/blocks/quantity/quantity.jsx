import Minus from "@/components/icons/minus";
import Plus from "@/components/icons/plus";
import styles from "./quantity.module.css";

const Quantity = ({ setQuantity, quantity }) => {
  const handleQuantity = (e) => {
    const val = Number(e.target.value);

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val);
    }
  };

  const increaseQuantity = (n = 1) => {
    const val = Number(quantity) + n;

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={() => increaseQuantity(-1)}>
        <Minus width={18} height={18} />
      </button>
      <input
        type="number"
        max={99}
        min={0}
        value={quantity}
        onChange={handleQuantity}
      />

      <button onClick={() => increaseQuantity(1)}>
        <Plus width={18} height={18} />
      </button>
    </div>
  );
};

export default Quantity;
