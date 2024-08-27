import styles from "./ShopNew.module.scss";
function ShopNew() {
  return (
    <div className={styles.container}>
      <img src="I.png" className={styles.shopNewItem} />
      <img src="II.png" className={styles.shopNewItem} />
      <img src="III.png" className={styles.shopNewItem} />
      <img src="IV.png" className={styles.shopNewItem} />
      <img src="V.png" className={styles.shopNewItem} />
      <div className={styles.shopNewItem}>
        <p className={styles.shopNewTitle}>Shop All New</p>
      </div>
    </div>
  );
}

export default ShopNew;
