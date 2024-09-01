export function CollectionUnit({ style, src }) {
  return (
    <div className={style}>
      <img src={src} className={styles.collectionImage} alt="Description" />
      <div>
        <div className={`${styles.collectionDescriptionTitle}`}>
          <p>Spring Dresses</p>
        </div>
        <div className={styles.collectionDescription}>
          <p>Now Blooming : Springtime shades and prints</p>
        </div>
      </div>
    </div>
  );
}
