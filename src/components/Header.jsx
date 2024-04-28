import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.webp";
import { useRef } from "react";

const Header = () => {
  const scroll = useRef(0);

  return (
    <header
      className=" mx-auto fixed bg-white z-10 w-full top-0 transition-[ease-in] px-4 sm:px-0 duration-500  "
      ref={scroll}
    >
      <nav className="flex items-center justify-center gap-10 py-4">
        <ul className="flex gap-6 items-center text-[14px] sm:text-[16px] mr-2">
          <li>
            <Link to="/category/yard_games">Yard Games</Link>
          </li>
          <li className="hidden md:inline">
            <Link to="/category/animals">Animals</Link>
          </li>
        </ul>
        <Link to="/" className="flex items-center justify-center">
          <img className="min-w-[100px]" src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-6 ml-2 sm:text-[16px] text-[14px] items-center">
          <li>
            <Link to="/category/backyard">BACKYARD DESIGN</Link>
          </li>

          <li className="hidden md:inline">
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
