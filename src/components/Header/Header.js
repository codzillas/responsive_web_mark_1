import Image from "next/image";
import styles from "./Header.module.scss";

function Header(props) {
  const { cartDisplayName } = props;
  return (
    <header className={styles.header}>
      <Image className={styles.siteLogo} src="/logo.svg" width="100" height="100" alt="dressmart" />
      <nav className={styles.nav}>
        <a href="#">New</a>
        <a href="#">Dresses</a>
        <a href="#">Clothing</a>
        <a href="#">Accessories</a>
        <a href="#">Sale</a>
      </nav>
      {/* <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a8 8 0 105.293 14.707l4.147 4.146a1 1 0 001.415-1.414l-4.146-4.147A8 8 0 0010 2zM8 10a2 2 0 114 0 2 2 0 01-4 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <input
          type="text"
          class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search..."
          style={{ color: "white", backgroundColor: "#6f6e6e" }}
        />
      </div> */}
      <div id="login">
        <a href="#">Log In</a>
      </div>
      <div id="signup">
        <a href="#">{cartDisplayName}</a>
      </div>
    </header>
    
  );
}

export default Header;
