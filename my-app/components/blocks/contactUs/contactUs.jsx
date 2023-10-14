import styles from "./contactUs.module.css";
import cartSideBarViewStyles from "@/components/cart/cartSidebarView/cartSidebarView.module.css";
import Link from "next/link";
import { GiPumpkinLantern } from "react-icons/gi";

const ContactUs = ({ para, small, link, linkText }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div>
            <GiPumpkinLantern width={50} size={50} />
          </div>
          <div className={styles.textWrapper}>
            <p>{para}</p>
            <small>{small}</small>
          </div>
        </div>
        <div>
          <span>
            <Link href={link} className={cartSideBarViewStyles.checkout}>
              {linkText}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
