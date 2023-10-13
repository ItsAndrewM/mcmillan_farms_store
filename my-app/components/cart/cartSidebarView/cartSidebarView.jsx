import { useCart } from "../../../lib/hooks/useCart";
import { useCheckoutUrl } from "../../../lib/hooks/useCheckoutUrl";
import CartItem from "../cartItem/cartItem";
import { getPrice } from "../../../lib/utils/product";
import styles from "./cartSidebarView.module.css";
import cartItemStyles from "../cartItem/cartItem.module.css";
import Link from "next/link";
import layoutStyles from "../../ui/layout/layout.module.css";
import Bag from "@/components/icons/bag";
import utilStyles from "@/styles/utils.module.css";

const CartSidebarView = () => {
  const checkoutUrl = useCheckoutUrl();
  const cart = useCart();
  const subTotal = getPrice(cart?.sub_total, cart?.currency ?? "CAD");
  const total = getPrice(cart?.grand_total, cart?.currency ?? "CAD");
  const shippingTotal = getPrice(cart?.shipment_total, cart?.currency ?? "CAD");
  const taxTotal = getPrice(cart?.tax_total, cart?.currency ?? "CAD");

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
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  currencyCode={cart?.currency ?? "USD"}
                />
              ))}
              <div className={styles.borderBottom}></div>
            </div>
            <div className={`${styles.wrapper}`}>
              Shipping and taxes calculated at checkout
              <div className={styles.totals}>
                <small className={`${utilStyles.uppercase} ${utilStyles.bold}`}>
                  Subtotal
                </small>
                <small>{subTotal}</small>
              </div>
            </div>
            {/* <div className={`${styles.wrapper}`}> */}
            {/* <Card sx={{ margin: "auto", minWidth: "10rem", paddingLeft: 5 }}>
                <Grid gap={1} columns={2} sx={{ my: 3 }}>
                  <Text>Subtotal:</Text>
                  <Text sx={{ marginLeft: "auto" }}>{subTotal}</Text>
                  <Text>Shipping:</Text>
                  <Text sx={{ marginLeft: "auto" }}>{shippingTotal}</Text>
                  <Text>Tax: </Text>
                  <Text sx={{ marginLeft: "auto" }}>{taxTotal}</Text>
                </Grid>

                <Divider />
                <Grid gap={1} columns={2}>
                  <Text variant="bold">Estimated Total:</Text>
                  <Text variant="bold" sx={{ marginLeft: "auto" }}>
                    {total}
                  </Text>
                </Grid>
              </Card> */}
            {/* </div> */}
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
