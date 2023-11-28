import Link from "next/link";
import styles from "./annoucementBar.module.css";
import layoutStyles from "../../layout/layout.module.css";
import footerStyles from "../../footer/footer.module.css";
import utilStyles from "@/styles/utils.module.css";
import { useEffect, useState } from "react";
const AnnoucementBar = ({
  annoucement,
  linkText,
  link,
  today,
  hours,
  annoucement2,
  setShowModal,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = (e) => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <div className={`${!isVisible ? styles.hide : styles.wrapper}`}>
      <div>
        <p>
          {annoucement}{" "}
          {/* <span className={utilStyles.underline}>{hours}</span>,{" "}
          <span className={utilStyles.underline}>
            {today}.{"  "}
          </span> */}
          {annoucement2}
        </p>
        <span>
          {/* <Link href={link} className={footerStyles.link}>
            {linkText}
          </Link> */}
          <button
            className={`${styles.button} ${footerStyles.link}`}
            onClick={() => setShowModal(true)}
          >
            Get Code Now
          </button>
        </span>
      </div>
    </div>
  );
};

export default AnnoucementBar;
