import { useCart } from "@/lib/hooks/useCart";
import { UIContext, useUI } from "@/lib/uiContext";
import Bag from "@/components/icons/bag";
import styles from "./userNav.module.css";
import { useEffect } from "react";

const UserNav = ({ className, children, ...props }) => {
  const { toggleSidebar } = useUI();
  const cart = useCart();

  const quantity = cart?.item_quantity ?? 0;

  return (
    <button onClick={toggleSidebar} aria-label="Cart" className={styles.button}>
      <Bag />
    </button>
  );
};

export default UserNav;
