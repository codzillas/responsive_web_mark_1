import styles from "./Footer.module.scss";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.topSection}>
        <p>SIGNUP FOR OUR EMAIL</p>
        <div className={styles.inputContainer}>
          <button className={styles.submitButton}>Submit</button>
        </div>
      </div>
      <div className={styles.midSection}>
        <div className={styles.leftSection}>
          <p>Info</p>
          <div className={styles.links}>
            <a>Info</a>
            <a>SignIn</a>
            <a>Shipping</a>
            <a>Returns</a>
            <a>Help</a>
            <a>Contact Us</a>
            <a>Size Guide</a>
          </div>
        </div>
        <div className={styles.centerSection}>
          <div className={styles.logoContainer}>
            <img className={styles.logoImg} src="/logo.svg" alt="dressmart" />
          </div>
          <p>
            Due to the impact of Covid-19, we are currently experiencing <br />
            minor delays with our shipping carriers
          </p>
          <br />
          <p>Free shipping over $100</p>
          <p> Free 5-day return shipping</p>
        </div>
        <div className={styles.rightSection}>
          <p>Company</p>
          <div className={styles.links}>
            <a>About us</a>
            <a>Careers</a>
            <a>Dressmart CAres</a>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>Sitemap | Terms of Service | Privacy Policy</p>
        <p>© 2022 dressmart.com LLC. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default Footer;
