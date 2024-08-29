import styles from "./Footer.module.scss";
import SocialIcons from "../SocialIcons/SocialIcons";

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
          <p
            style={{
              textAlign: "left",
              marginBottom: "1rem",
              fontSize: "18px",
            }}
          >
            Info
          </p>
          <div
            className={styles.links}
            style={{
              textAlign: "left",
            }}
          >
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
          <p style={{ fontWeight: "bold" }}>
            Due to the impact of Covid-19, we are currently experiencing <br />
            minor delays with our shipping carriers
          </p>
          <br />
          <p style={{ fontWeight: "lighter" }}>Free shipping over $100</p>
          <p style={{ fontWeight: "lighter" }}> Free 5-day return shipping</p>
        </div>
        <div className={styles.rightSection}>
          <p
            style={{
              textAlign: "right",
              marginBottom: "1rem",
              fontSize: "18px",
            }}
          >
            Company
          </p>
          <div
            className={styles.links}
            style={{
              textAlign: "right",
            }}
          >
            <a>About us</a>
            <a>Careers</a>
            <a>Dressmart Cares</a>
          </div>
        </div>
      </div>
      <div className={styles.lowerMidSection}>
        <div className={styles.availableCountrySection}>
          <h3>Available Country</h3>
          <img
            className={styles.availableCountryImage}
            src="/available-country.png"
          />
        </div>
        <div className={styles.SocialIconsSection}>
          <SocialIcons />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
          Sitemap | Terms of Service | Privacy Policy
        </p>
        <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
          © 2022 dressmart.com LLC. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
}

export default Footer;
