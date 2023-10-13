import { useContext } from "react";
import { Context } from "../context";
import swellConfig from "@/config/swell.config";
import swell from "swell-js";

export const useAddItemToCart = () => {
  const { swell, setCart } = useContext(Context);
  // const { setCart } = useContext(Context);
  const addItemToCart = async (product_id, quantity, options) => {
    // try {
    //   if (swell) {
    const newCart = await swell.cart.addItem({
      product_id,
      quantity,
      variant_id: options ? options.id : null,
    });
    setCart(newCart);
    return newCart;
  };
  // if (options) {
  // await swell.init(swellConfig.storeId, swellConfig.publicKey);

  // } else {
  //   const newCart = await swell.cart.addItem({
  //     product_id,
  //     quantity,
  //   });
  //   setCart(newCart);
  //   return newCart;
  // }
  // } catch (err) {
  //   console.log(err);
  // }
  // };

  return addItemToCart;
};
