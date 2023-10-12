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
      console.log("no options");
      console.log(product_id);
      console.log(quantity);
      const newCart = await swell.cart.addItem({
        product_id,
        quantity,
        product_id,
      });
      console.log(newCart);
      setCart(newCart);
      return newCart;
    }
  };

  return addItemToCart;
};
