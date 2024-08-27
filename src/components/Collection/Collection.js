import Image from "next/image";

function Collection({ src }) {
  return (
    <Image
      src={src}
      width="400"
      height="400"
      alt="alt"
      style={{ height: "400px" }}
    />
  );
}

export default Collection;
