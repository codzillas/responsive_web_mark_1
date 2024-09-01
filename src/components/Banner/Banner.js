'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { BANNER_STYLES } from '@/common/constants';
import styles from './Banner.module.scss';
import Image from 'next/image';

function Banner(props) {
  const { style, src, text } = props;

  useEffect(() => {
    gsap.set('.topText', { y: -150 });
    gsap.set('.leftMidText', { x: -150 });
    gsap.set('.leftBottomText', { x: -150 });
    gsap.set('.rightBottomText', { x: 150 });

    const animateTexts = () => {
      gsap.to('.topText', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });
      gsap.to('.leftMidText', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        // delay: 0.2,
      });
      gsap.to('.leftBottomText', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        // delay: 0.4,
      });
      gsap.to('.rightBottomText', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        // delay: 0.6,
      });
    };
    animateTexts();

    const listener = window.addEventListener('scroll', () => {
      const middleMainText = document.getElementById('middleMainText');
      console.log('window.screenY', window.screenY);
      // console.log('scroll', middleMainText.style.right);
      middleMainText.style.right = window.screenY + '%';
    });

    return () => {
      console.log('removeEventListener');
      window.removeEventListener('scroll', listener);
    };
  }, []);

  if (style === BANNER_STYLES.style1) {
    return (
      <div className={styles.style1BannerContainer}>
        <Image
          className={styles.mainBannerImage}
          src={src}
          layout='fill'
          objectFit='cover'
          alt='main-banner'
        />
        <div className={`${styles.subText} topText`}>
          <p>{text}</p>
        </div>
        <div
          id='middleMainText'
          className={`${styles.middleMainText} leftMidText`}
        >
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
          <div className={`${styles.leftCategoryText} leftBottomText`}>
            Tank Top - White
          </div>
          <div className={`${styles.rightCategoryText} rightBottomText`}>
            Shop New Arrivals
          </div>
        </div>
      </div>
    );
  } else if (style === BANNER_STYLES.style2) {
    return (
      <div className={styles.style2BannerContainer}>
        <Image
          className={styles.mainBannerImage}
          src={src}
          layout='fill'
          objectFit='cover'
          alt='main-banner'
        />
        <div className={`${styles.style2MainText} leftMidText`}>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default Banner;
