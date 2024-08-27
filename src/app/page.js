import Collection from "@/components/Collection/Collection";
import Header from "@/components/Header/Header";
import Image from "next/image";
import BannerOne from "@/components/Banner/BannerOne";

export default function Home() {
  return (
    <>
      <div className="grid-container ">
        <div className="header">
          <Header cartDisplayName="My Cart" imageUrl={["/image1", "image2"]} />
        </div>
        <div className="banner-one"><BannerOne/></div>
        <div className="collection">Collection</div>
        <div className="banner-two">Banner 2</div>
        <div className="collection-two">Collection 2</div>
        <div className="banner-three">Banner 3</div>
        <div className="collection-three">Collection 3</div>
        <div className="banner-four">Banner 4</div>
        <div className="shop-new">Shop New</div>
        <div className="connect">Connect</div>
        <div className="follow">Follow</div>
        <div className="about">About</div>
        <div className="footer">Footer</div>
      </div>
      <main className="main-section">
        <section className="main-banner"></section>
        <section className="collections-section"></section>
      </main>
    </>
  );
}
