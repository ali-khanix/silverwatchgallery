import ProductsList from "@/components/ProductsList";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }) {
  console.log(searchParams);
  return (
    <>
      <div className="relative aspect-[1/1] sm:aspect-[3/1]">
        {/* HERO */}
        <Image
          src={"/images/hero-1.webp"}
          alt="عکس ساعت حرفه ای"
          fill
          className="object-cover"
        />
      </div>

      <section id="features" className="mt-8">
        <div className="flex justify-center items-center gap-16 mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h3 className="font-bold">ضمانت اصالت</h3>
            <span className="text-sm font-light">محصولات اورجینال</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h3 className="font-bold">ارسال سریع</h3>
            <span className="text-sm font-light">به سراسر کشور</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h3 className="font-bold">مشاوره خرید</h3>
            <span className="text-sm font-light">به صورت تخصصی</span>
          </div>
        </div>
      </section>

      <section id="products" className="mt-10">
        <div className="flex justify-between items-center mx-3 sm:mx-0 mb-4">
          <h2 className="font-bold text-[18px]">تازه های سیلور واچ</h2>
          <Link href={"/products"} className="underline">
            مشاهده همه
          </Link>
        </div>
        <ProductsList />
      </section>
    </>
  );
}
