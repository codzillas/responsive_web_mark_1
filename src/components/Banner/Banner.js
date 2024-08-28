import { BANNER_STYLES } from "@/common/constants";
import styles from "./Banner.module.scss";
import Image from "next/image";

function Banner(props) {
  const { style, src,text } = props;
  if (style === BANNER_STYLES.style1) {
    return (
      <div className={styles.style1BannerContainer}>
        <Image
          className={styles.mainBannerImage}
          src={src}
          layout="fill"
          objectFit="cover"
          alt="main-banner"
        />
        <div className={styles.text1}>
          <p>{text}</p>
        </div>
        <div className={styles.text2}>
          <div>
            <p>RITE</p>
          </div>
          <div>
            <p>OF</p>
          </div>
          <div>
            <p>Spring</p>
          </div>
        </div>
        <div>
          <div className={styles.leftCategory}>Tank Top - White</div>
          <div className={styles.rightCategory}>Shop New Arrivals</div>
        </div>
      </div>
    );
  }
  else if (style === BANNER_STYLES.style2) {
    return (
      <div className={styles.style2BannerContainer}>
        <Image
          className={styles.mainBannerImage}
          src={src}
          layout="fill"
          objectFit="cover"
          alt="main-banner"
        />
        <div className={styles.style2Text1}>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default Banner;
