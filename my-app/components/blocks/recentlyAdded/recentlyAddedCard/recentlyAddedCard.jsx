import Link from "next/link";
import styles from "../recentlyAdded.module.css";
import Image from "next/image";

const RecentlyAddedCard = ({ item }) => {
  return (
    <li key={item.id} className={styles.items}>
      <Link href={`/product/${item.slug}`}>
        <div>
          <Image
            src={
              !item.images.length
                ? `https://placehold.co/450/jpeg`
                : item.images[0].file.url
            }
            width={450}
            height={450}
          />
        </div>
      </Link>
      <Link href={`/product/${item.slug}`}>
        <h3>{item.name}</h3>
      </Link>
      <Link href={`/product/${item.slug}`}>
        <p>
          {item.currency} ${item.price.toFixed(2)}
        </p>
      </Link>
    </li>
  );
};

export default RecentlyAddedCard;
