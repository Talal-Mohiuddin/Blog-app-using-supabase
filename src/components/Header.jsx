import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.webp";
import { useRef } from "react";

const Header = () => {
  const scroll = useRef(0);

  return (
    <header
      className=" mx-auto fixed bg-white z-10 w-full top-0 transition-[ease-in] duration-500  "
      ref={scroll}
    >
      <nav className="flex items-center justify-center gap-10 py-4">
        <ul className="flex gap-6 items-center mr-2">
          <li>
            <Link to="/category/yard_games">Yard Games</Link>
          </li>
          <li>
            <Link to="/category/backyard">BACKYARD DESIGN</Link>
          </li>
        </ul>
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="flex gap-6 ml-2 items-center">
          <li>
            <Link to="/category/animals">Animals</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
