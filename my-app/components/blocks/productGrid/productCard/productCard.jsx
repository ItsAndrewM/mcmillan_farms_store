import { useAddItemToCart } from "@/lib/hooks/useAddItemToCart";
import { useUI } from "@/lib/uiContext";
import styles from "@/styles/collections.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductCard = ({ item }) => {
  const [loading, setLoading] = useState(false);
  const addItem = useAddItemToCart();
  const { openSidebar } = useUI();

  const addToCart = async (e) => {
    setLoading(true);
    try {
      await addItem(e.target.value, 1);
      // openSidebar();
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <li key={item.id} className={styles.item}>
      <Link href={`/product/${item.slug}`}>
        <div>
          <Image
            src={
              !item.images.length
                ? `https://placehold.co/375/jpeg`
                : item.images[0].file.url
            }
            width={375}
            height={375}
          />
        </div>
      </Link>
      <Link href={`/product/${item.slug}`}>
        <h3>{item.name}</h3>
      </Link>
      <Link href={`/product/${item.slug}`}>
        <small>
          {item.currency} ${item.price.toFixed(2)}
        </small>
      </Link>
    </li>
  );
};

export default ProductCard;