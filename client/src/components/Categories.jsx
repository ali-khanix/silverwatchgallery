import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    name: "دسته بندی",
    icon: <Menu />,
    slug: "products",
  },
  {
    name: "کالکشن ها",
    slug: "collections",
  },
  {
    name: "برند ها",
    slug: "brands",
  },
  {
    name: "تخفیف ها",
    slug: "offers",
  },
  {
    name: "تماس با ما",
    slug: "call-us",
  },
];

const Categories = () => {
  return (
    <div className="w-full flex justify-start items-center mx-auto ">
      <ul className="flex gap-8 py-4">
        {menuItems.map((item) => (
          <li key={item.name} className="-translate-x-3">
            <Link href={`/${item?.slug}`} className="hover:text-zinc-400">
              <div className="flex flex-row gap-2">
                {item?.icon} {item.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
