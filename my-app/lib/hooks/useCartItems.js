import { useContext } from "react";
import { Context } from "../context";

export function useCartItems() {
  const { cart, setCart } = useContext(Context);

  if (!cart || !Array.isArray(cart.items)) {
    return;
  }

  return cart?.items;
}
