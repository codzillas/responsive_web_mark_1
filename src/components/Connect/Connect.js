import styles from './Connect.module.scss';
function Connect() {
  return (
    <div>
      <p className={styles.connectWith}>Connect with Dressmart </p>
      <div className={styles.socialMedias}>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>blog</p>
      </div>
      <div style={{ backgroundColor: 'gray' }}>
        <p className={styles.connectWith}>Follow us on instagram</p>
        <div className={styles.followItems}>
          <img src='collection-1.png' className={styles.followItem} />
          <img src='collection-1.png' className={styles.followItem} />
          <img src='collection-1.png' className={styles.followItem} />
          <img src='collection-1.png' className={styles.followItem} />
          <img src='collection-1.png' className={styles.followItem} />
        </div>
        <br></br>
        <div className={styles.followItems}>
          <img src='collection-1.png' className={styles.followItem} />
          <img src='collection-1.png' className={styles.followItem} />
          <img src='collection-1.png' className={styles.followItem} />
          <img src='collection-1.png' className={styles.followItem} />
          <img src='collection-1.png' className={styles.followItem} />
        </div>
      </div>
    </div>
  );
}

export default Connect;
