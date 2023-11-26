import {
  getAllCollectionPaths,
  getAllProductPaths,
} from "@/lib/operations-swell";

const EXTERNAL_DATA_URL = "shop.mcmillanfarms.ca";

const generateSiteMap = (collections, products) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
                    <url>
                    <loc>https://shop.mcmillanfarms.ca/</loc>
                    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
                    <changefreq>daily</changefreq>
                        <priority>0.8</priority>
                    </url>
                    <url>
                    <loc>https://shop.mcmillanfarms.ca/collections</loc>
                    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
                    <changefreq>daily</changefreq>
                        <priority>0.8</priority>
                    </url>
                    <url>
                    <loc>https://shop.mcmillanfarms.ca/policies/shipping-policy</loc>
                    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
                    <changefreq>daily</changefreq>
                        <priority>0.8</priority>
                    </url>                    
                    <url>
                    <loc>https://shop.mcmillanfarms.ca/policies/terms-and-conditions</loc>
                    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
                    <changefreq>daily</changefreq>
                        <priority>0.8</priority>
                    </url>                    
                    <url>
                    <loc>https://shop.mcmillanfarms.ca/policies/privacy-policy</loc>
                    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
                    <changefreq>daily</changefreq>
                        <priority>0.8</priority>
                    </url>
                    <url>
                    <loc>https://shop.mcmillanfarms.ca/policies/refund-policy</loc>
                    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
                    <changefreq>daily</changefreq>
                        <priority>0.8</priority>
                    </url>
                    <url>
                    <loc>https://shop.mcmillanfarms.ca/contact-us</loc>
                    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
                    <changefreq>daily</changefreq>
                        <priority>0.8</priority>
                    </url>
                    <url>
                    <loc>https://shop.mcmillanfarms.ca/cart</loc>
                    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
                    <changefreq>daily</changefreq>
                        <priority>0.8</priority>
                    </url>
                    ${collections
                      .map((collection) => {
                        return `
                            <url>
                            <loc>${`${EXTERNAL_DATA_URL}/collections/${collection}`}</loc>
                            <lastmod>${new Date()
                              .toISOString()
                              .slice(0, 10)}</lastmod>
                            <changefreq>daily</changefreq>
                                <priority>0.8</priority>
                            </url>
                        `;
                      })
                      .join("")}
                      ${products
                        .map((product) => {
                          return `
                              <url>
                              <loc>${`${EXTERNAL_DATA_URL}/products/${product}`}</loc>
                              <lastmod>${new Date()
                                .toISOString()
                                .slice(0, 10)}</lastmod>
                              <changefreq>daily</changefreq>
                                <priority>0.8</priority>
                              </url>
                          `;
                        })
                        .join("")}

                </urlset>`;
};

const SiteMap = () => {};

export default SiteMap;

export async function getServerSideProps({ res }) {
  const products = await getAllProductPaths();
  const collections = await getAllCollectionPaths();
  const sitemap = generateSiteMap(collections, products);

  res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
