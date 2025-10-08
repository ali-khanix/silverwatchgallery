import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="">
      <SearchIcon />
      <Input placeholde={"جستجو"} type={"search"} />
    </div>
  );
};

export default SearchBar;
