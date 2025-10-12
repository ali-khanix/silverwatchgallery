import Image from "next/image";

export default function Home() {
  return (
    <div className="relative aspect-[1.5/1] h-[70vh]">
      <Image
        src={"/images/hero-1.webp"}
        alt="عکس ساعت حرفه ای"
        fill
        className="object-cover"
      />
    </div>
  );
}
