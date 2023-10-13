import Link from "next/link";
import styles from "../crossSell.module.css";
import Image from "next/image";

const CrossSellCard = ({ item }) => {
  return (
    <li key={item.id} className={styles.card}>
      <Link href={`/product/${item.slug}`}>
        <div>
          <Image
            src={
              !item.images.length
                ? `https://placehold.co/220/jpeg`
                : item.images[0].file.url
            }
            height={220}
            width={220}
            alt={item.name}
          />
        </div>
      </Link>
      <Link href={`/product/${item.slug}`}>
        <p>{item.name}</p>
      </Link>
      <Link href={`/product/${item.slug}`}>
        <small>
          {item.currency} ${item.price.toFixed(2)}
        </small>
      </Link>
    </li>
  );
};

export default CrossSellCard;
