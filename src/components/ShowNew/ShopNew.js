import styles from './ShopNew.module.scss';
function ShopNew() {
  return (
    <div className={styles.container}>
      <img src='collection-1.png' className={styles.shopNewItem} />
      <img src='collection-1.png' className={styles.shopNewItem} />
      <img src='collection-1.png' className={styles.shopNewItem} />
      <img src='collection-1.png' className={styles.shopNewItem} />
      <img src='collection-1.png' className={styles.shopNewItem} />
      <div className={styles.shopNewItem}>
        <p className={styles.shopNewTitle}>Shop All New</p>
      </div>
    </div>
  );
}

export default ShopNew;
