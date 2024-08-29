import Image from "next/image";
import styles from "./SiteLogo.module.scss";

function WebsiteLogo() {
  return (
    <div className={styles.siteLogoContainer}>
      <Image
        className={styles.siteLogo}
        src="/logo.svg"
        width="149"
        height="30"
        alt="dressmart"
      />
    </div>
  );
}

export default WebsiteLogo;
