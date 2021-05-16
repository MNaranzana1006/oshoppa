import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
const SearchInput = () => {
  return (
    <div className="relative md:max-w-xl md:mx-auto">
      <input
        className="w-full rounded-2xl border border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary"
        type="text"
        name="search"
        placeholder="search for anything..."
      />

      <div className="absolute top-0 right-0 mt-3 mr-4">
        <SearchIcon className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchInput;
