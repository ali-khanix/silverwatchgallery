import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { Search } from "lucide-react";
import Categories from "./Categories";
import ShoppingCartIcon from "./ShoppingCartIcon";
import MobileNav from "./MobileNav";
import { Input } from "./ui/input";

{
  /* <div className="mx-auto p-4 sm:px-0 sm:max-w-xl  md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"></div> */
}

const Navbar = () => {
  return (
    <nav className=" bg-zinc-950 text-white sticky top-0 right-0 z-10 w-full">
      <div className="px-4 sm:px-0 py-4 flex justify-between items-center sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto sm:gap-24 flex-row-reverse sm:flex-row ">
        {/* LOGO */}
        <Link href={"/"} className="sm:mx-auto sm:w-3/12 sm:translate-y-3">
          <Image
            src={`/logo.svg`}
            width={100}
            height={100}
            alt="لوگو گالری ساعت سیلور"
            className="max-w-none"
          />
        </Link>

        {/* SEARCH INPUT AND CATEGORIES */}
        <div className="w-5/12 flex flex-col gap-4 mx-4">
          <SearchBar display={"hidden"} />
        </div>

        {/* LOGIN AND CART BUTTONS */}
        <div className="hidden sm:flex items-center justify-end sm:w-4/12 gap-4">
          <ShoppingCartIcon />

          <Link href={"/user"} className="flex gap-1 hover:text-zinc-400">
            <User size={24} />
            <span className="text-sm">ورود یا عضو شوید</span>
          </Link>
        </div>

        {/* MOBILE NAV */}
        <div className="sm:hidden flex flex-row gap-[30px] justify-center items-center">
          <MobileNav />
          <ShoppingCartIcon size={32} className="text-gray-300" />
        </div>
      </div>
      <SearchBar display={"block"} />

      <div className="hidden sm:flex justify-between items-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto sm:gap-24 flex-row-reverse sm:flex-row ">
        <Categories />
      </div>
    </nav>
  );
};

export default Navbar;
