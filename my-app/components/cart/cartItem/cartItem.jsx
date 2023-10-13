import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Plus from "../../icons/plus";
import Minus from "../../icons/minus";
import { getPrice } from "../../../lib/utils/product";
import { useUpdateItemQuantity } from "../../../lib/hooks/useUpdateItemQuantity";
import { useRemoveItemFromCart } from "../../../lib/hooks/useRemoveItemFromCart";
import styles from "./cartItem.module.css";
import Quantity from "@/components/blocks/quantity/quantity";

const CartItem = ({ item, currencyCode }) => {
  const updateItem = useUpdateItemQuantity();
  const removeItem = useRemoveItemFromCart();
  const [quantity, setQuantity] = useState(item.quantity);
  const [removing, setRemoving] = useState(false);
  const updateQuantity = async (quantity) => {
    await updateItem(item.id, quantity);
  };
  const handleQuantity = (e) => {
    const val = Number(e.target.value);

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val);
    }
  };
  const handleBlur = () => {
    const val = Number(quantity);

    if (val !== item.quantity) {
      updateQuantity(val);
    }
  };
  const increaseQuantity = (n = 1) => {
    const val = Number(quantity) + n;

    if (Number.isInteger(val) && val >= 0) {
      setQuantity(val);
      updateQuantity(val);
    }
  };
  const handleRemove = async () => {
    setRemoving(true);

    try {
      // If this action succeeds then there's no need to do `setRemoving(true)`
      // because the component will be removed from the view
      await removeItem(item.product.id);
    } catch (error) {
      console.error(error);
      setRemoving(false);
    }
  };

  useEffect(() => {
    // Reset the quantity state if the item quantity changes
    if (!quantity === 0) {
      if (item.quantity !== Number(quantity)) {
        setQuantity(item.quantity);
      }
    } else {
      updateQuantity(quantity);
    }
  }, [quantity]);

  return (
    <div className={styles.grid}>
      <div>
        <Link href={item.product.slug}>
          <Image
            src={
              !item.product.images || !item.product.images.length
                ? "https://placehold.co/90/jpeg"
                : item.product.images[0].file?.url
            }
            width={90}
            height={90}
          />
        </Link>
      </div>
      <div className={styles.information}>
        <div>
          <small>{item.product.name}</small>
        </div>
        <div>
          <Quantity
            quantity={quantity}
            setQuantity={setQuantity}
            stock_level={item.product.stock_level}
            handleRemove={handleRemove}
            min={0}
          />
          <small>${item.price_total.toFixed(2)}</small>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
