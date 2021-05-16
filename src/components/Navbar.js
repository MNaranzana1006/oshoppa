import React from "react";
import Logo from "./Logo";

import SearchInput from "./SearchInput";
import Button from "./Button";
import ShoppingCardNavbar from "./ShoppingCardNavbar";
const Navbar = () => {
  return (
    <div className="bg-primary sticky -top-20 md:-top-28 z-50 xl:relative xl:top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 gap-4 items-center xl:grid-cols-3">
          <div className="grid-cols-1">
            <Logo />
          </div>
          <div className="row-start-2 col-span-2  xl:row-start-1 xl:col-start-2 xl:col-span-1 text-center">
            <SearchInput />
          </div>
          <div className="grid-cols-1 flex items-center justify-end space-x-5">
            <div className="flex flex-wrap space-x-3 items-center">
              <Button>Sign in</Button>
              <p className="hidden md:block text-white uppercase">Or</p>
              <div className="hidden md:flex">
                <Button>Register</Button>
              </div>
            </div>
            <div className="pr-4">
              <ShoppingCardNavbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
