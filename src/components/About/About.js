import SiteLogo from "../SiteLogo/SiteLogo";
import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.aboutUsContainer}>
      <div>
        <SiteLogo />
      </div>
      <div className={styles.aboutUsParagraph}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, massa
          auctor risus consequat sed sed. Integer cras faucibus venenatis erat
          nec eget imperdiet eu. Scelerisque neque sit eu faucibus mattis
          posuere convallis senectus. Hac ornare vitae quis sit eu velit
          facilisi molestie quam. Sapien, eleifend vel lorem turpis ullamcorper.
          Non risus netus amet, faucibus. Nibh commodo, purus blandit donec
          feugiat maecenas massa. Vitae purus nulla sit integer rhoncus purus
          nibh nullam.<br></br>
          <br></br> Id posuere morbi amet sem massa habitasse enim. Faucibus nam
          ac platea sagittis. Diam malesuada scelerisque eu nisl varius et. Nunc
          in sociis gravida at egestas facilisis. Tempus ultrices ultrices magna
          posuere odio. Risus placerat adipiscing fermentum venenatis, sit.
          Suspendisse turpis ultricies hendrerit cum posuere facilisis
          suspendisse dignissim. Aliquet nisi nisi venenatis accumsan a arcu
          suspendisse. Quis integer est porta scelerisque donec. Gravida tortor
          condimentum ullamcorper etiam fames vel vehicula ullamcorper neque.
          <br></br>
          <br></br>
          Faucibus cursus velit massa id. Nulla porta pharetra duis enim
          consectetur urna leo dictumst. Pellentesque urna, enim pretium vivamus
          id posuere nunc eu ridiculus. Sed nec velit molestie sociis viverra
          penatibus mollis dictum in. Rhoncus porttitor sed sem risus sed purus
          quam ut diam. Enim odio eget gravida tellus vel. Auctor gravida nullam
          tristique in eros, eget pulvinar pharetra aliquam. Et quisque vel,
          auctor sit ultrices eget risus vestibulum magna.<br></br>
          <br></br> Orci nunc turpis turpis nulla. Quis hac nisl cras tellus
          fames maecenas rutrum tellus. Rutrum turpis vestibulum ultrices quis.
          Suspendisse in a ornare aliquet condimentum. Nunc dui augue gravida
          leo tincidunt ullamcorper. In condimentum vulputate nibh semper at
          nulla risus. Vel et nunc vehicula sed arcu. Cursus risus interdum amet
          semper vestibulum lorem praesent. Nullam mattis aenean non
          pellentesque lectus ultrices purus suspendisse. Eu est nec pharetra,
          massa dignissim malesuada vitae amet.
        </p>
      </div>
    </div>
  );
}

export default About;
