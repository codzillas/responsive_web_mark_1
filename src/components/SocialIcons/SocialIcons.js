import Image from "next/image";
import styles from "./SocialIcons.module.scss";

function SocialIcons() {
  return (
    <div className={styles.socialIconContainer}>
      <Image
        className={styles.appStoreLogo}
        src="/app-store.png"
        width="120"
        height="40"
        alt="app Store Logo"
      />
      <Image
        className={styles.socialIcons}
        src="/social-icons.png"
        width="240"
        height="32"
        alt="Social Icons"
      />
    </div>
  );
}

export default SocialIcons;
