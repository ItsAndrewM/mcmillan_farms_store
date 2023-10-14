import styles from "@/styles/collections.module.css";
import ProductCard from "./productCard/productCard";

const ProductGrid = ({ items }) => {
  console.log(items);
  return (
    <ul className={styles.grid}>
      {items.map((item) => {
        return <ProductCard item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default ProductGrid;
