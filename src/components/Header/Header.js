import Image from "next/image";
import styles from "./Header.module.scss";

function Header(props) {
  const { cartDisplayName } = props;
  return (
    <header className={styles.header}>
      <div className={styles.siteLogoContainer}>
        <img className={styles.siteLogo} src="/logo.svg" alt="dressmart" />
      </div>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <a>New</a>
          <a>Dresses</a>
          <a>Clothing</a>
          <a>Accessories</a>
          <a>Sale</a>
        </nav>
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
