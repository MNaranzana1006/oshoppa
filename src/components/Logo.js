import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/images/logo.png";
const Logo = () => {
  return (
    <div>
      <Link className="inline-block focus:outline-none" to="/">
        <img className="h-16 w-30 md:h-24 md:w-48" src={LogoImage} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
