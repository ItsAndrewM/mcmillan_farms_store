import { useContext } from "react";
import { Context } from "../context";

export const useRemoveItemFromCart = () => {
  const { swell, setCart } = useContext(Context);
  const removeItemFromCart = async (itemId) => {
    if (itemId === "" || itemId == null) {
      throw new Error("ItemId must not be blank or null");
    }
    const newCart = await swell.cart.removeItem(itemId);
    setCart(newCart);
  }

  return removeItemFromCart;
}
