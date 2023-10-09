if (!storeId) {
  throw new Error("Missing required environment variable SWELL_STORE_ID");
}
if (!publicKey) {
  throw new Error("Missing required environment variable SWELL_PUBLIC_KEY");
}

export default {
  storeId: process.env.SWELL_STORE_ID,
  publicKey: process.env.SWELL_PUBLIC_KEY,
};
