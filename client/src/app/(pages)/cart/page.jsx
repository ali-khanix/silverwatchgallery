"use client";

import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  {
    id: 1,
    title: "سبد خرید",
  },
  {
    id: 2,
    title: "آدرس",
  },
  {
    id: 3,
    title: "روش پرداخت",
  },
];

const cartItems = [
  {
    id: 1,
    name: "کاسیو",
    shortDescription: "MTP-1381L-1AV",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    price: 5200000,
    offer: 4900000,
    colors: ["black", "green", "red"],
    images: {
      black: "/products/watch-image.jpg",
    },
  },
  {
    id: 2,
    name: "کاسیو",
    shortDescription: "MTP-1381L-1AV",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    price: 5200000,
    offer: 4900000,
    colors: ["black", "blue"],
    images: {
      black: "/products/watch-image.jpg",
    },
  },
  {
    id: 3,
    name: "کاسیو",
    shortDescription: "MTP-1381L-1AV",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    price: 5200000,
    offer: 4900000,
    colors: ["black", "gray"],
    images: {
      black: "/products/watch-image.jpg",
    },
  },
];

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeStep = parseInt(searchParams.get("step" || 1));
  console.log(activeStep);

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-8">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">سبد خرید شما</h1>

      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center justify-start lg:justify-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-zinc-800" : "border-zinc-400"
            }`}
          >
            {/* STEP ID */}
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center font-medium text-white text-sm ${
                step.id === activeStep ? "bg-zinc-800" : "bg-zinc-400"
              }`}
            >
              {step.id}
            </div>
            {/* STEP TITLE */}
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-red-600" : "text-zinc-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
