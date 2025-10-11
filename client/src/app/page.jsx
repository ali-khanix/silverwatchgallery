import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image
        src={"/images/hero-1.webp"}
        alt="عکس ساعت حرفه ای"
        width={1920}
        height={1080}
      />
    </div>
  );
}
