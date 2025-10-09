import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

{
  /* <div className="mx-auto p-4 sm:px-0 sm:max-w-xl  md:max-w-2xl lg:max-w-3xl xl:max-w-6xl"></div> */
}

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 text-white">
      <div className="p-4 sm:p-8 flex justify-between items-center sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto gap-24">
        {/* LOGO */}
        <Link href={"/"} className="sm:w-3/12 sm:translate-y-3">
          <Image
            src={"/logo.svg"}
            width={128}
            height={128}
            alt="لوگو گالری ساعت سیلور"
            className="w-32"
          />
        </Link>

        {/* SEARCH INPUT AND CATEGORIES */}
        <div className="w-6/12 flex flex-col gap-4 mx-4">
          <SearchBar />
        </div>

        {/* LOGIN AND CART BUTTONS */}
        <div className="sm:flex items-center gap-2 w-3/12">
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
      </div>
    </nav>
  );
};

export default Navbar;
