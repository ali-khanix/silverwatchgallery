import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 text-white">
      {/* LOGO */}
      <Link href={"/"} className="">
        <Image
          src={"/logo.svg"}
          width={64}
          height={64}
          alt="لوگو گالری ساعت سیلور"
        />
      </Link>

      {/* SEARCH INPUT AND CATEGORIES */}
      <div className="">
        <SearchBar />
        <ul className="">Links</ul>
      </div>
    </nav>
  );
};

export default Navbar;
