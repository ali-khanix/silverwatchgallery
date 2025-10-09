import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="relative w-full hidden sm:flex">
      <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 " />
      <Input
        placeholder={"جستجو..."}
        type={"search"}
        className="pr-10 border-zinc-700 py-6 rounded-[12px]"
      />
    </div>
  );
};

export default SearchBar;
