import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularContent = [
  {
    id: 1,
    title: "آموزش جاوااسکریپت",
    badge: "کدنویسی",
    image:
      "https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg?semt=ais_hybrid&w=740&q=80",
    count: 4300,
  },
  {
    id: 2,
    title: "روندهای فناوری در سال ۲۰۲۵",
    badge: "فناوری",
    image:
      "https://img.freepik.com/premium-psd/white-tshirt-mockup-tee-design-merch-showcase-template-unisex-streetwear-aesthetic-branding_883241-55444.jpg?semt=ais_hybrid&w=740&q=80",
    count: 3200,
  },
  {
    id: 3,
    title: "آینده هوش مصنوعی",
    badge: "هوش مصنوعی",
    image:
      "https://img.freepik.com/free-photo/handsome-sensitive-red-head-man-smiling_23-2149509820.jpg?semt=ais_hybrid&w=740&q=80",
    count: 2400,
  },
  {
    id: 4,
    title: "توضیح هوک‌های ری‌اکت",
    badge: "کدنویسی",
    image:
      "https://img.freepik.com/free-psd/medium-shot-smiley-man-posing_23-2150454306.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1500,
  },
  {
    id: 5,
    title: "تولید تصویر با هوش مصنوعی",
    badge: "هوش مصنوعی",
    image:
      "https://img.freepik.com/free-photo/close-up-portrait-attractive-man-with-afro-hairstyle-stubble-wears-orange-anorak_273609-8595.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1200,
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "تمدید اشتراک",
    badge: "جان دو",
    image:
      "https://img.freepik.com/free-photo/close-up-portrait-attractive-man-with-afro-hairstyle-stubble-wears-orange-anorak_273609-8595.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1400,
  },
  {
    id: 2,
    title: "پرداخت برای خدمات",
    badge: "جین اسمیت",
    image:
      "https://img.freepik.com/free-psd/medium-shot-smiley-man-posing_23-2150454306.jpg?semt=ais_hybrid&w=740&q=80",
    count: 2100,
  },
  {
    id: 3,
    title: "تمدید اشتراک",
    badge: "مایکل جانسون",
    image:
      "https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1300,
  },
  {
    id: 4,
    title: "پرداخت برای خدمات",
    badge: "لیلی آدامز",
    image:
      "https://img.freepik.com/premium-psd/white-tshirt-mockup-tee-design-merch-showcase-template-unisex-streetwear-aesthetic-branding_883241-55444.jpg?semt=ais_hybrid&w=740&q=80",
    count: 2500,
  },
  {
    id: 5,
    title: "تمدید اشتراک",
    badge: "سم براون",
    image:
      "https://img.freepik.com/premium-psd/white-tshirt-mockup-tee-design-merch-showcase-template-unisex-streetwear-aesthetic-branding_883241-55444.jpg?semt=ais_hybrid&w=740&q=80",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  const list = title === "محتوای محبوب" ? popularContent : latestTransactions;
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card
            key={item.id}
            className="flex flex-row p-2 items-center justify-between"
          >
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium flex flex-col gap-2">
                <span>{item.title}</span>
                <Badge variant={"secondary"}>{item.badge}</Badge>
              </CardTitle>
            </CardContent>
            <CardFooter>{item.count / 1000}k</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
