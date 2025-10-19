import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { Search } from "lucide-react";
import Categories from "./Categories";

{
  /* <div className="mx-auto p-4 sm:px-0 sm:max-w-xl  md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"></div> */
}

const Navbar = () => {
  return (
    <nav className="bg-zinc-950 text-white">
      <div className="p-4 flex justify-between items-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto sm:gap-24 flex-row-reverse sm:flex-row ">
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
        <div className="w-6/12 flex flex-col gap-4 mx-4">
          <SearchBar />
        </div>

        {/* LOGIN AND CART BUTTONS */}
        <div className="hidden sm:flex items-center justify-end gap-2 sm:w-3/12">
          <Link href={"/cart"}>
            <ShoppingCart
              size={48}
              className="border-1 border-gray-500 p-2.5 rounded-[10px]"
            />
          </Link>
          <Link href={"/user"}>
            <User
              size={48}
              className="border-1 border-gray-500 p-2.5 rounded-[10px]"
            />
          </Link>
          <div className="flex gap-2 text-gray-400 font-light">
            <Link href={"/login"}>ورود</Link>
            <span>|</span>
            <Link href={"/sign-up"}>عضویت</Link>
          </div>
        </div>
        <div className="sm:hidden flex flex-row gap-[30px] justify-center items-center">
          <MenuIcon size={32} />
          <Link href={"/cart"}>
            <ShoppingCart size={32} className="text-gray-300" />
          </Link>
          <Search size={32} />
        </div>
      </div>

      <div className="hidden sm:flex justify-between items-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto sm:gap-24 flex-row-reverse sm:flex-row ">
        <Categories />
      </div>
    </nav>
  );
};

export default Navbar;
