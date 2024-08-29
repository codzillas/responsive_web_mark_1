import styles from "./Collection.module.scss";
import CollectionSection from "./CollectionSection";

function Collection(props) {
  const { collectionUrls, headingTextLine1, headingTextLine2 } = props;
  return (
    <div className={styles.collectionContainer}>
      <div className={styles.collectionHeadingContainer}>
          <p>{headingTextLine1}</p>
          <p>{headingTextLine2}</p>
      </div>
      <div style={{width:"100%"}}>
        {collectionUrls.map((urls, index) => (
          <CollectionSection key={index} image1={urls[0]} image2={urls[1]} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
