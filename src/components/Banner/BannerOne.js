import Image from "next/image";

function BannerOne({ src }) {
  return (
    <div className="banner-one bg-red-100">
      <img
        src="/home-banner.svg"
        height="100"
        style={{ width: "100%" }}
        alt="alt"
      />
    </div>
  );
}

export default BannerOne;
