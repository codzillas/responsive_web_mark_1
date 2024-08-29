import styles from "./ShopNew.module.scss";
import { SHOP_NEW_CAROUSAL_IMAGES } from "@/common/constants";

function ShopNew(props) {
  const { images, title } = props;
  return (
    <div className={styles.shopNewContainer}>
      <img src={images.imageUrl1} className={styles.shopNewItem} />
      <img src={images.imageUrl2} className={styles.shopNewItem} />
      <img src={images.imageUrl3} className={styles.shopNewItem} />
      <img src={images.imageUrl4} className={styles.shopNewItem} />
      <img src={images.imageUrl5} className={styles.shopNewItem} />
      <div className={styles.shopNewItem}>
        <p className={styles.shopNewTitle}>{title}</p>
      </div>
    </div>
  );
}

export default ShopNew;
