import React from "react";
import { Link } from "react-router-dom";
const Button = (props) => {
  let href = "/";
  if (props.children === "Sign in") href = "login";
  else if (props.children === "Register") href = "register";
  return (
    <>
      <Link
        className="bg-gradient-to-br from-secondary to-yellow-200 px-4 md:px-8 py-2 rounded-2xl text-black md:border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-400 focus:ring-secondary transform hover:text-gray-300 md:hover:text-gray-800 hover:scale-105 transition duration-300 ease-in-out"
        to={href}
        onClick={props.toggleIsShowLoginModal}
      >
        {props.children}
      </Link>
    </>
  );
};

export default Button;
