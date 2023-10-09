import { useContext } from "react";
import { Context } from "../context";

export const useCartCount = () => {
  const { cart } = useContext(Context);
  if (cart == null || cart.item_quantity < 1) {
    return 0;
  }

  return cart.item_quantity;
}
