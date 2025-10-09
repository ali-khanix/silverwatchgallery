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
      <div className="p-8 flex justify-between items-center sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto">
        {/* LOGO */}
        <Link href={"/"} className="w-3/12 translate-y-3">
          <Image
            src={"/logo.svg"}
            width={128}
            height={128}
            alt="لوگو گالری ساعت سیلور"
          />
        </Link>

        {/* SEARCH INPUT AND CATEGORIES */}
        <div className="w-6/12 flex flex-col gap-4 mx-4">
          <SearchBar />
        </div>

        {/* LOGIN AND CART BUTTONS */}
        <div className="flex gap-2 w-3/12">
          <ShoppingCart />
          <User />
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
