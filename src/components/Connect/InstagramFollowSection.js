import styles from "./Connect.module.scss";

function InstaConnect(props) {
    const { title, subTitle, images } = props;
  return (
    <div className={styles.instaSectionContainer}>
      <div className={styles.textDirection}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.followItemsContainer}>
        <img src={images.imageUrl1} className={styles.followItem} />
        <img src={images.imageUrl2} className={styles.followItem} />
        <img src={images.imageUrl3} className={styles.followItem} />
        <img src={images.imageUrl4} className={styles.followItem} />
        <img src={images.imageUrl5} className={styles.followItem} />
      </div>
      <div className={styles.followItemsContainer}>
        <img src={images.imageUrl6} className={styles.followItem} />
        <img src={images.imageUrl7} className={styles.followItem} />
        <img src={images.imageUrl8} className={styles.followItem} />
        <img src={images.imageUrl9} className={styles.followItem} />
        <img src={images.imageUrl10} className={styles.followItem} />
      </div>
      <div className={styles.textDirection}>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
    </div>
  );
}

export default InstaConnect;
