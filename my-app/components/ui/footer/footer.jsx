import Image from "next/image";
import styles from "./footer.module.css";
import utilStyles from "@/styles/utils.module.css";
import Link from "next/link";
import logo from "@/assets/logo/logo_text_right.png";
import { footerData } from "@/data/footerData";
import { useEffect, useState } from "react";
import { getPaginatedProducts } from "@/lib/operations-swell";
import LoadingDots from "@/components/loadingDots/loadingDots";

const Footer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const results = await getPaginatedProducts();
      setProducts(results);
    };
    if (!products.length) {
      fetchProducts();
    }
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Link href={"/"}>
              <Image
                src={logo}
                height={250}
                className={utilStyles.borderCircle}
                alt={"McMillan Farms logo"}
              />
            </Link>
          </div>
          <div className={styles.container}>
            {footerData.map((menuItem, index) => {
              return (
                <ul className={styles.column} key={index}>
                  <li>
                    <h3>
                      <Link href={menuItem.link} className={styles.link}>
                        {menuItem.name}
                      </Link>
                    </h3>
                    <ul>
                      {!menuItem.submenu.length ? (
                        <></>
                      ) : (
                        menuItem.submenu.map((subMenuItem, index) => {
                          return (
                            <li key={index}>
                              <Link
                                className={styles.link}
                                href={subMenuItem.link}
                              >
                                {subMenuItem.icon && (
                                  <span>{subMenuItem.icon}</span>
                                )}
                                <span>{subMenuItem.name}</span>
                              </Link>
                            </li>
                          );
                        })
                      )}
                    </ul>
                    {/* {menuItem.name.includes("Shop") && (
                      <ul>
                        {!products.length ? (
                          <LoadingDots />
                        ) : (
                          products.map((product) => {
                            return (
                              <li key={index}>
                                <Link
                                  className={styles.link}
                                  href={`/collections/${product.slug}`}
                                > */}
                    {/* <span>
                                  {product.icon && product.icon}
                                </span> */}
                    {/* <span>{product.name}</span>
                                </Link>
                              </li>
                            );
                          })
                        )}
                      </ul>
                    )} */}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.legalContainer}>
            <p>
              © McMillan Farms 2023 • Site by
              <span>
                <Link
                  href={"https://muffinware.vercel.app/"}
                  className={styles.link}
                >
                  MuffinWare
                </Link>
              </span>
            </p>
          </div>
          <div className={`${styles.legal} ${styles.legalContainer}`}>
            <span>
              <Link className={styles.link} href={"/policies/privacy-policy"}>
                Privacy Policy
              </Link>
            </span>
            <span>|</span>
            <span>
              <Link
                className={styles.link}
                href={"/policies/terms-and-conditions"}
              >
                Terms and Conditions
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
