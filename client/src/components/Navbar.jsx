import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { MenuIcon } from "lucide-react";

{
  /* <div className="mx-auto p-4 sm:px-0 sm:max-w-xl  md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"></div> */
}

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 text-white">
      <div className="p-4 sm:p-8 flex justify-between items-center sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto gap-24 flex-row-reverse sm:flex-row">
        {/* LOGO */}
        <Link
          href={"/"}
          className="w-full flex items-center justify-center mx-auto sm:w-3/12 sm:translate-y-3"
        >
          <Image
            src={`/logo.svg`}
            width={128}
            height={128}
            alt="لوگو گالری ساعت سیلور"
            className="hidden sm:block"
          />
          <Image
            src={`/logo-fav.svg`}
            width={64}
            height={64}
            alt="لوگو گالری ساعت سیلور"
            className="block sm:hidden"
          />
        </Link>

        {/* SEARCH INPUT AND CATEGORIES */}
        <div className="w-6/12 flex flex-col gap-4 mx-4">
          <SearchBar />
        </div>

        {/* LOGIN AND CART BUTTONS */}
        <div className="hidden sm:flex items-center gap-2 sm:w-3/12">
          <Link href={"/cart"}>
            <ShoppingCart
              size={36}
              className="border-1 border-gray-500 p-1 rounded-md"
            />
          </Link>
          <Link href={"/user"}>
            <User
              size={36}
              className="border-1 border-gray-500 p-1 rounded-md"
            />
          </Link>
          <div className="flex gap-2 text-gray-400 font-light text-sm">
            <Link href={"/login"}>ورود</Link>
            <span>|</span>
            <Link href={"/login"}>عضویت</Link>
          </div>
        </div>
        <MenuIcon className="w-full sm:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
