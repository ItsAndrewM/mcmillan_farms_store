import { useContext, useState, useEffect } from "react";
import { Context } from "../context";

export const useCart = () => {
  const { swell, cart, setCart } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await swell.cart.get();
        setCart(result);
      } catch (error) { }
    };

    fetchData();
  }, []);

  return cart;
}
