import Image from "next/image";
import styles from "./Header.module.scss";

function Header(props) {
  const { cartDisplayName } = props;
  return (
    <header className={styles.header}>
      <div className={styles.siteLogoContainer}>
        <Image className={styles.siteLogo} src="/logo.svg" width="149" height="30" alt="dressmart" />
      </div>
      <div className={styles.navContainer}>
        <div className={styles.navItems}>
          <a>New</a>
        </div>
        <div className={styles.navItems}>
          <a>Dresses</a>
        </div>
        <div className={styles.navItems}>
          <a>Clothing</a>
        </div>
        <div className={styles.navItems}>
          <a>Accessories</a>
        </div>

        <div className={styles.navItems}>
          <a>Sale</a>
        </div>
      </div>
      <div className={styles.headerButtons}>
        <div className={styles.login}>
          <a href="#">Log In</a>
        </div>
        <div className={styles.mycart}>
          <a href="#">My Cart</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
