import "@/styles/globals.css";
import { poppins } from "../assets/fonts/fonts";
import { CommerceProvider } from "@/lib/commerceProvider";
import swellConfig from "@/config/swell.config";
import { ManagedUIContext } from "@/lib/uiContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --body-font-family: ${poppins.style.fontFamily};
            --header-font-family: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <CommerceProvider {...swellConfig}>
        <ManagedUIContext>
          <Component {...pageProps} />
        </ManagedUIContext>
      </CommerceProvider>
    </>
  );
}
