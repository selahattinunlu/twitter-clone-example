import { SearchIcon } from "@heroicons/react/solid";
const Search = () => {
  return (
    <div className="relative">
      <input
        className="w-full py-2 pl-10 pr-4 placeholder-gray-500 bg-gray-50 focus:bg-white rounded-full border border-gray-200"
        placeholder="Search Twitter"
      />

      <SearchIcon className="w-5 h-5 absolute top-3 left-4 text-gray-600" />
    </div>
  );
};

export default Search;
