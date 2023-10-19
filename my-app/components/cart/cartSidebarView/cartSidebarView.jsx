import { useCart } from "../../../lib/hooks/useCart";
import { useCheckoutUrl } from "../../../lib/hooks/useCheckoutUrl";
import CartItem from "../cartItem/cartItem";
import { getPrice } from "../../../lib/utils/product";
import styles from "./cartSidebarView.module.css";
import Link from "next/link";
import utilStyles from "@/styles/utils.module.css";

const CartSidebarView = () => {
  const checkoutUrl = useCheckoutUrl();
  const cart = useCart();
  const subTotal = getPrice(cart?.sub_total, cart?.currency ?? "CAD");

  const items = cart?.items ?? [];
  const isEmpty = items.length === 0;

  return (
    <div
      className={`${styles.container} ${isEmpty ? styles.justifyContent : ""}`}
      style={{ flexDirection: "column", alignItems: "center" }}
    >
      {isEmpty ? (
        <div className={styles.container}>
          <div className={`${styles.wrapper}`}>
            <div className={styles.header}>
              <h2>Cart</h2>
            </div>
            <div className={styles.empty}>
              <small>Your cart is currently empty.</small>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.container}>
            <div className={`${styles.wrapper}`}>
              <div className={styles.header}>
                <h2>Cart</h2>
              </div>
              <div className={styles.cartItemsWrapper}>
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    currencyCode={cart?.currency ?? "USD"}
                  />
                ))}
              </div>
              <div className={styles.borderBottom}></div>
            </div>
            <div className={`${styles.wrapper}`}>
              <div className={styles.totals}>
                <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
                  Subtotal
                </small>
                <small>{subTotal}</small>
              </div>
              <div>
                <small>
                  Shipping, taxes, and discount codes calculated at checkout.
                </small>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            {checkoutUrl && (
              <Link href={checkoutUrl} className={styles.checkout}>
                Proceed to Checkout
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebarView;
