import Image from "next/image";
import styles from "./hero.module.css";
import Link from "next/link";
import layoutStyles from "@/components/ui/layout/layout.module.css";
import utilStyles from "@/styles/utils.module.css";
const Hero = ({ imageSrc, header, link, linkText, altText }) => {
  return (
    <div className={`${styles.heroWrapper}`}>
      <Image
        src={imageSrc}
        className={styles.image}
        quality={100}
        height={750}
        width={1125}
        alt={altText}
        priority
      />
      <div className={styles.container}>
        <h1 className={utilStyles.uppercase}>{header}</h1>
        <span>
          <Link
            href={link}
            // className={`${layoutStyles.link} ${layoutStyles.button}`}
            className={` ${layoutStyles.button}`}
          >
            {linkText}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Hero;
