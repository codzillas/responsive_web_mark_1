import styles from "./Bannerone.module.scss";
import Image from "next/image";

function Banner(props) {
  const { style } = props;
  if (style === "style1") {
    return <div>Style 1</div>;
  }
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
        <p>50% OFF SITEWIDE</p>
      </div>
    </div>
  );
}

export default Banner;
