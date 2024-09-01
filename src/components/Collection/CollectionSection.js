import styles from "./Collection.module.scss";
import Image from "next/image";
import { CollectionUnit } from "./CollectionUnit";

function CollectionSection({ image1, image2 }) {
  return (
    <div className={styles.collectionImageWithDescription}>
      <CollectionUnit src={image1} style={styles.leftSideCollection} />
      <CollectionUnit src={image2} style={styles.rightSideCollection} />
    </div>
  );
}

export default CollectionSection;
