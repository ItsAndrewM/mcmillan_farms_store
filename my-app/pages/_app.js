import "@/styles/globals.css";
import { poppins } from "../assets/fonts/fonts";

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
      <Component {...pageProps} />
    </>
  );
}
