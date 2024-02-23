import "@/styles/globals.css";
import { poppins } from "../assets/fonts/fonts";
import { CommerceProvider } from "@/lib/commerceProvider";
import swellConfig from "@/config/swell.config";
import { ManagedUIContext } from "@/lib/uiContext";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

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
					<GoogleAnalytics gaId="G-5H4S7683HG" />
					<GoogleTagManager gtmId="GTM-M3RQPQ27" />
					<Analytics />
				</ManagedUIContext>
			</CommerceProvider>
		</>
	);
}
