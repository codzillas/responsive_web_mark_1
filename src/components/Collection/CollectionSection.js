import styles from './Collection.module.scss';

function CollectionSection() {
  return (
    <div>
      <div className={styles.collectionItem}>
        <img src='collection-1.png' style={{ height: '100%', width: '100%' }} />
      </div>

      <p>Spring Dresses</p>
      <p>Now Blooming : Springtime shades and prints</p>
    </div>
  );
}

export default CollectionSection;
