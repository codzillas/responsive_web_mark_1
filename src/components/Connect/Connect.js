import styles from "./Connect.module.scss";
function Connect() {
  return (
    <div style={{ backgroundColor: "black", marginTop: "2rem" }}>
      <p className={styles.connectWith}>Connect with Dressmart </p>
      <div className={styles.socialMedias}>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>blog</p>
      </div>
      <div style={{ backgroundColor: "gray", paddingTop: "1rem" }}>
        <p className={styles.connectWith}>Follow us on instagram</p>
        <div className={styles.followItems}>
          <img src="q.png" className={styles.followItem} />
          <img src="r.png" className={styles.followItem} />
          <img src="s.png" className={styles.followItem} />
          <img src="t.png" className={styles.followItem} />
          <img src="u.png" className={styles.followItem} />
        </div>
        <br></br>
        <div className={styles.followItems}>
          <img src="v.png" className={styles.followItem} />
          <img src="w.png" className={styles.followItem} />
          <img src="x.png" className={styles.followItem} />
          <img src="y.png" className={styles.followItem} />
          <img src="z.png" className={styles.followItem} />
        </div>
      </div>
    </div>
  );
}

export default Connect;
