import styles from "./Collection.module.scss";
import Image from "next/image";

function CollectionSection({ image1, image2 }) {
  return (
    <div className={styles.collectionImageWithDescription}>
      <div className={styles.leftSideCollection}>
        <img
          src={image1}
          className={styles.collectionImage}
          alt="Image description"
        />
        <div>
          <div
            className={`${styles.collectionDescriptionTitle} .collectionHeadingFont`}
          >
            <p>Spring Dresses</p>
          </div>
          <div className={styles.collectionDescription}>
            <p>Now Blooming : Springtime shades and prints</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSideCollection}>
        <img
          src={image2}
          className={styles.collectionImage}
          alt="Image description"
        />
        <div>
          <div className={styles.collectionDescriptionTitle}>
            <p>Spring Dresses</p>
          </div>
          <div className={styles.collectionDescription}>
            <p>Now Blooming : Springtime shades and prints</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionSection;
