import Image from "next/image";
import styles from "./Header.module.scss";

function Header(props) {
  const { cartDisplayName } = props;
  return (
    <header className={styles.header}>
      <img
        className={styles.siteLogo}
        src="/logo.svg"
        alt="dressmart"
      />
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <a href="#">New</a>
          <a href="#">Dresses</a>
          <a href="#">Clothing</a>
          <a href="#">Accessories</a>
          <a href="#">Sale</a>
        </nav>
      </div>
      <div className={styles.headerButtons}>
        <div id="login">
          <a href="#">Log In</a>
        </div>
        <div id="mycart">
          <a href="#">My Cart</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
