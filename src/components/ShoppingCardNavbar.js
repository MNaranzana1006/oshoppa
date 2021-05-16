import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
const ShoppingCardNavbar = () => {
  return (
    <>
      <a
        href="/"
        className="relative group text-gray-300 transform transition duration-100 ease-in-out hover:text-red-400 focus-within:outline-none "
      >
        <ShoppingCartIcon className="block h-6 w-6" aria-hidden="true" />
        <p className="absolute -top-5 left-5 bg-red-600 text-gray-100 px-3 py-2 rounded-full text-xs">
          1
        </p>
      </a>
    </>
  );
};

export default ShoppingCardNavbar;
