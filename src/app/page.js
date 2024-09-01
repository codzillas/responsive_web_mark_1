import Collection from '@/components/Collection/Collection';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import Banner from '@/components/Banner/Banner';
import {
  BANNER_STYLES,
  COLLECTION_1_HEADING,
  COLLECTION_2_HEADING,
  COLLECTION_3_HEADING,
  SHOP_NEW_CAROUSAL_IMAGES,
  AVAILABLE_SOCIAL_MEDIA,
  INSTA_SECTION_IMAGES,
} from '@/common/constants';
import ShopNew from '@/components/ShopNew/ShopNew';
import Connect from '@/components/Connect/Connect';
import InstagramFollowSection from '@/components/Connect/InstagramFollowSection';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <div className='grid-container '>
        <div className='header'>
          <Header cartIconUrl={'/image1'} />
        </div>
        <div className='banner-one'>
          <Banner
            src='/homepage-banner.jpg'
            style={BANNER_STYLES.style1}
            text='50 % OFF SITEWIDE'
          />
        </div>
        <div className='collection'>
          <Collection
            collectionUrls={[['/A.png', '/B.png']]}
            headingTextLine1={COLLECTION_1_HEADING.line1}
            headingTextLine2={COLLECTION_1_HEADING.line2}
          />
        </div>
        <div className='banner-two'>
          <Banner
            src='/1.png'
            style={BANNER_STYLES.style2}
            text='Shop Formal Dresses'
          />
        </div>
        <div className='collection-two'>
          <Collection
            collectionUrls={[['/C.png', '/D.png']]}
            headingTextLine1={COLLECTION_2_HEADING.line1}
            headingTextLine2={COLLECTION_2_HEADING.line2}
          />
        </div>
        <div className='banner-three'>
          <Banner
            src='/2.png'
            style={BANNER_STYLES.style2}
            text='Spring Shopping'
          />
        </div>
        <div className='collection-three'>
          <Collection
            collectionUrls={[['/E.png', '/F.png']]}
            headingTextLine1={COLLECTION_3_HEADING.line1}
            headingTextLine2={COLLECTION_3_HEADING.line2}
          />
        </div>
        <div className='banner-four'>
          <Banner
            src='/3.png'
            style={BANNER_STYLES.style2}
            text='Floral Dresses'
          />
        </div>
        <div className='shop-new'>
          <ShopNew images={SHOP_NEW_CAROUSAL_IMAGES} title='SHOP ALL NEW' />
        </div>
        <div className='connect'>
          <Connect
            sectionHeader='CONNECT WITH DRESSMART'
            socialMedia={AVAILABLE_SOCIAL_MEDIA}
          />
          <InstagramFollowSection
            title='FOLLOW US ON INSTAGRAM'
            subTitle='TAG US TO GET FEATURED ON OUR CHANNEL'
            images={INSTA_SECTION_IMAGES}
          />
        </div>
        <div className='about'>
          <About />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
      <main className='main-section'>
        <section className='main-banner'></section>
        <section className='collections-section'></section>
      </main>
    </>
  );
}
