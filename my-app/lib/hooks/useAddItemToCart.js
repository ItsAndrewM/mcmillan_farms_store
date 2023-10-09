import { useContext } from "react";
import { Context } from "../context";

export const useAddItemToCart = () => {
  const { swell, setCart } = useContext(Context);
  const addItemToCart = async (product_id, quantity, options) => {
    if (options) {
      const newCart = await swell.cart.addItem({
        product_id,
        quantity,
        variant_id: options.id,
      });
      setCart(newCart);
      return newCart;
    } else {
      const newCart = await swell.cart.addItem({
        product_id,
        quantity,
      });
      setCart(newCart);
      return newCart;
    }
  };

  return addItemToCart;
};
