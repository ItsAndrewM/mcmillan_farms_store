import { useCart } from "../../../lib/hooks/useCart";
import { useCheckoutUrl } from "../../../lib/hooks/useCheckoutUrl";
import CartItem from "../cartItem/cartItem";
import { getPrice } from "../../../lib/utils/product";
import styles from "./cartSidebarView.module.css";
import cartItemStyles from "../cartItem/cartItem.module.css";
import Link from "next/link";
import layoutStyles from "../../ui/layout/layout.module.css";
import Bag from "@/components/icons/bag";

const CartSidebarView = () => {
  const checkoutUrl = useCheckoutUrl();
  const cart = useCart();
  const subTotal = getPrice(cart?.sub_total, cart?.currency ?? "USD");
  const total = getPrice(cart?.grand_total, cart?.currency ?? "USD");
  const shippingTotal = getPrice(cart?.shipment_total, cart?.currency ?? "USD");
  const taxTotal = getPrice(cart?.tax_total, cart?.currency ?? "USD");
  console.log(cart);

  const items = cart?.items ?? [];
  const isEmpty = items.length === 0;

  return (
    <div
      className={`${styles.container} ${isEmpty ? styles.justifyContent : ""}`}
      style={{ flexDirection: "column", alignItems: "center" }}
    >
      {isEmpty ? (
        <>
          <Bag />
          Your bag is empty
          <small className={cartItemStyles.smallText}>Continue browsing!</small>
        </>
      ) : (
        <>
          <div className={styles.container}>
            <div className={`${styles.wrapper}`}>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  currencyCode={cart?.currency ?? "USD"}
                />
              ))}
            </div>
            <div className={`${styles.wrapper}`}>
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
            </div>
          </div>
          <div className={styles.container}>
            {checkoutUrl && (
              <span className={layoutStyles.submit}>
                <Link href={checkoutUrl}>Proceed to Checkout</Link>
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebarView;
