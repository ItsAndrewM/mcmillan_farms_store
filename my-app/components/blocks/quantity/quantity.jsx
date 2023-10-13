import Minus from "@/components/icons/minus";
import Plus from "@/components/icons/plus";
import styles from "./quantity.module.css";

const Quantity = ({
  setQuantity,
  quantity,
  stock_level,
  handleRemove,
  min,
}) => {
  const handleQuantity = (e) => {
    const val = Number(e.target.value);

    if (Number.isInteger(val) && val >= min) {
      setQuantity(val);
      if (handleRemove && val === 0) {
        handleRemove();
      }
    }
  };

  const increaseQuantity = (n = 1) => {
    const val = Number(quantity) + n;

    if (Number.isInteger(val) && val >= min) {
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
        max={Number(stock_level)}
        min={min}
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
