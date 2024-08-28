import Collection from "@/components/Collection/Collection";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import ShopNew from "@/components/ShowNew/ShopNew";
import Connect from "@/components/Connect/Connect";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="grid-container ">
        <div className="header">
          <Header cartIconUrl={"/image1"} />
        </div>
        <div className="banner-one">
          <Banner
            src="/homepage-banner.jpg"
            style={BANNER_STYLES.style1}
            text="50 % OFF SITEWIDE"
          />
        </div>
        <div className="collection">
          <Collection collectionUrls={["A.png", "B.png"]} />
        </div>
        <div className="banner-two">
          <Banner
            src="/1.png"
            style={BANNER_STYLES.style2}
            text="Shop Formal Dresses"
          />
        </div>
        <div className="collection-two">
          <Collection collectionUrls={["C.png", "D.png"]} />
        </div>
        <div className="banner-three">
          <Banner
            src="/2.png"
            style={BANNER_STYLES.style2}
            text="Spring Shopping"
          />
        </div>
        <div className="collection-three">
          <Collection collectionUrls={["E.png", "F.png"]} />
        </div>
        <div className="banner-four">
          <Banner
            src="/3.png"
            style={BANNER_STYLES.style2}
            text="Floral Dresses"
          />
        </div>
        <div className="shop-new">
          <ShopNew />
        </div>
        <div className="connect">
          <Connect />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      <main className="main-section">
        <section className="main-banner"></section>
        <section className="collections-section"></section>
      </main>
    </>
  );
}
