import Image from 'next/image';
import styles from './Collection.module.scss';
import CollectionSection from './CollectionSection';

function Collection() {
  return (
    <div className={styles.collectionContainer}>
      <div className={styles.collectionHeadingContainer}>
        <p>Featured</p>
        <p>Collection</p>
      </div>
      <div className={styles.collectionItems}>
        <CollectionSection />
        <CollectionSection />
      </div>
    </div>
  );
}

export default Collection;
