import React from "react";
import LogoImage from "../assets/images/logo.png";
const Logo = () => {
  return (
    <div>
      <a className="inline-block focus:outline-none" href="/">
        <img className="h-16 w-30 md:h-24 md:w-48" src={LogoImage} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
