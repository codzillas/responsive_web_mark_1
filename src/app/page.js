import Collection from '@/components/Collection/Collection';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import Banner from '@/components/Banner/Banner';
import ShopNew from '@/components/ShowNew/ShopNew';
import Connect from '@/components/Connect/Connect';
import About from '@/components/About/About';

export default function Home() {
  return (
    <>
      <div className='grid-container '>
        <div className='header'>
          <Header cartDisplayName='My Cart' imageUrl={['/image1', 'image2']} />
        </div>
        <div className='banner-one'>
          <Banner />
        </div>
        <div className='collection'>
          <Collection />
        </div>
        <div className='banner-two'>
          <Banner />
        </div>
        <div className='collection-two'>
          <Collection />
        </div>
        <div className='banner-three'>
          <Banner />
        </div>
        <div className='collection-three'>
          <Collection />
        </div>
        <div className='banner-four'>
          <Banner />
        </div>
        <div className='shop-new'>
          <ShopNew />
        </div>
        <div className='connect'>
          <Connect />
        </div>
        <div className='follow'>Follow</div>
        <div className='about'>
          <About />
        </div>
        <div className='footer'>Footer</div>
      </div>
      <main className='main-section'>
        <section className='main-banner'></section>
        <section className='collections-section'></section>
      </main>
    </>
  );
}
