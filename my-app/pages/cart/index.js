import CartSidebarView from "@/components/cart/cartSidebarView/cartSidebarView";
import Layout from "@/components/ui/layout/layout";
import styles from "@/components/cart/cartSidebarView/cartSidebarView.module.css/";
import { Suspense } from "react";
import LoadingDots from "@/components/loadingDots/loadingDots";

const Cart = () => {
  return (
    <Layout>
      <div className={styles.wrapper} style={{ padding: "2em 0" }}>
        <Suspense fallback={<LoadingDots />}>
          <CartSidebarView />
        </Suspense>
      </div>
    </Layout>
  );
};

export default Cart;
