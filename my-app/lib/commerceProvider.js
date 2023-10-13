import { useState, useEffect } from "react";
import swell, { currency } from "swell-js";
import { Context } from "./context";
import swellConfig from "../config/swell.config";
import useSWR from "swr";

export const CommerceProvider = ({ children }) => {
  useSWR("swell", async () => {
    await swell.init(swellConfig.storeId, swellConfig.publicKey);
    await swell.currency.select("CAD");
  });
  const [cart, setCart] = useState(null);
  console.log(cart);

  return (
    <Context.Provider
      value={{
        swell,
        cart,
        setCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
