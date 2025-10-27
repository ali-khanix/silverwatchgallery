import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Categories from "./Categories";
import { Watch } from "lucide-react";

const categories = [
  {
    gender: "ساعت مچی مردانه",
    catDetails: [
      { title: "ساعت کلاسیک مردانه", slug: "mens-classic-watch" },
      { title: "ساعت بند استیل مردانه", slug: "mens-steel-watch" },
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
      <SheetContent className={"bg-zinc-200 px-4"}>
        <ul className="flex flex-col gap-4 mt-4">
          <Collapsible>
            <CollapsibleTrigger className={"mt-14 flex justify-between w-full"}>
              <div className="flex flex-row gap-2">
                <Watch className="text-zinc-700" />
                دسته بندی ها
              </div>
              <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col gap-4 p-4 ">
                {categories.map((category) => (
                  <Collapsible key={category.gender}>
                    <CollapsibleTrigger className="flex w-full items-center justify-between text-right text-base font-medium text-zinc-900">
                      {category.gender}
                      <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>

                    <CollapsibleContent className="mt-2 ml-4 flex flex-col gap-1 text-sm text-zinc-700">
                      {category.catDetails.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/${cat.slug}`}
                          className="hover:text-zinc-900"
                        >
                          {cat.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
          <li>کالکشن ها</li>
          <li>برند ها</li>
          <li>تخفیف ها</li>
          <li>تماس با ما</li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
