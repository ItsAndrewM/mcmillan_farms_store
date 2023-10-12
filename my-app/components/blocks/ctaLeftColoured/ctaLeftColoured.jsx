import Image from "next/image";
import style from "./ctaLeft.module.css";
import utilStyles from "@/styles/utils.module.css";
import layoutStyles from "../../ui/layout/layout.module.css";
import Link from "next/link";

const CtaLeftColoured = ({ imageSrc, headline, desc, tag, altText }) => {
  return (
    <div className={`${style.wrapper} ${utilStyles.cream}`}>
      <div className={style.container}>
        <Image
          src={imageSrc}
          height={800}
          width={800}
          quality={100}
          alt={altText}
          loading="lazy"
        />
      </div>
      <div className={`${style.container}  ${style.cream}`}>
        <div className={style.textContainer}>
          <small>{tag}</small>
          <h3>{headline}</h3>
          <p>{desc}</p>

          {/* <Link
              href={link}
              className={`${utilStyles.paddingTop1} ${layoutStyles.link}`}
            >
              {linkText}
            </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CtaLeftColoured;
