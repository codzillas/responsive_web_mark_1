import styles from "./Connect.module.scss";
import InstagramFollowSection from "../Connect/InstagramFollowSection";

// import { AVAILABLE_SOCIAL_MEDIA } from "@/common/constants";

function Connect(props) {
  const { socialMedia, sectionHeader } = props;
  return (
    <div className={styles.connectContainer}>
      <div className={`${styles.sectionHeaderContainer} connectWithTitle`}>
        <p className={styles.connectWith}>{sectionHeader} </p>
      </div>
      <div className={styles.socialMedias}>
        <p>{socialMedia.instagram}</p>
        <p>{socialMedia.facebook}</p>
        <p>{socialMedia.blog}</p>
      </div>
    </div>
  );
}

export default Connect;
