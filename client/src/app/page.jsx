import Image from "next/image";

export default function Home() {
  return (
    <div className="relative aspect-[1/1] sm:aspect-[3/1]">
      <Image
        src={"/images/hero-1.webp"}
        alt="عکس ساعت حرفه ای"
        fill
        className="object-cover"
      />
    </div>
  );
}
