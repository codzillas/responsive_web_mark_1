import styles from "./Bannerone.module.scss";
import Image from "next/image";

function BannerOne() {
  return (
    <div className={styles.bannerContainer}>
      <Image
        className={styles.mainBannerImage}
        src="/homepage-banner.jpg"
        // width="100"
        // height="100"
        layout="fill"
        objectFit="cover"
        alt="main-banner"
      />
      <div className={styles.text1}>
        <p>50 % OFF SITEWIDE</p>
      </div>
    </div>
  );
}

export default BannerOne;
