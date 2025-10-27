import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    gender: "ساعت مچی مردانه",
    catDetails: [
      { title: "ساعت کلاسیک مردانه", slug: "mens-classic-watch" },
      { title: "ساعت بند اسلیل مردانه", slug: "mens-steel-watch" },
      { title: "ساعت کلاسیک مردانه", slug: "mens-leather-watch" },
      { title: "ساعت مچی پسرانه", slug: "boys-watch" },
    ],
  },
  {
    gender: "ساعت مچی زنانه",
    catDetails: [
      { title: "ساعت کلاسیک زنانه", slug: "womens-classic-watch" },
      { title: "ساعت بند اسلیل زنانه", slug: "womens-steel-watch" },
      { title: "ساعت کلاسیک زنانه", slug: "womens-leather-watch" },
      { title: "ساعت کلاسیک زنانه", slug: "girls-watch" },
      { title: "ساعت لوکس و لاکچری", slug: "luxury-watch" },
    ],
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={32} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className={"mt-14"}>
            {categories.map((category) => (
              <div className="flex flex-col gap-2 text-zinc-950">
                <p key={category.catDetails[0]}>{category.gender}</p>
                {category.catDetails.map((cat) => (
                  <Link
                    key={cat.slug ?? cat.title}
                    className="text-sm font-normal"
                    href={cat.slug ? `/${cat.slug}` : "#"}
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            ))}
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
