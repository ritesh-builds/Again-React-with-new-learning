import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
        w-full
        flex
        items-center
        justify-between
        px-[40px]
        py-[20px]
        bg-[#080808]
        border-b
        border-[#1f1f1f]
        relative
        z-[100]
      "
    >
      {/* LOGO */}
      <Link
        to="/"
        className="
          text-white
          no-underline
        "
      >
        <h3
          className="
            text-[20px]
            font-medium
            tracking-[-1px]
            m-0
          "
        >
          Comfort Footwear
        </h3>
      </Link>

      {/* NAV LINKS */}
      <div className="flex items-center gap-[40px]">
        <Link
          to="/"
          className="
            text-[#888]
            no-underline
            text-[17px]
            transition-colors
            duration-300
            hover:text-white
          "
        >
          Home
        </Link>

        <Link
          to="/About"
          className="
            text-[#888]
            no-underline
            text-[17px]
            transition-colors
            duration-300
            hover:text-white
          "
        >
          About
        </Link>

        <Link
          to="/Contact"
          className="
            text-[#888]
            no-underline
            text-[17px]
            transition-colors
            duration-300
            hover:text-white
          "
        >
          Contact
        </Link>

        <Link
          to="/Product"
          className="
            text-[#888]
            no-underline
            text-[17px]
            transition-colors
            duration-300
            hover:text-white
          "
        >
          Product
        </Link>
      </div>

      {/* LOGIN */}
      <Link
        to="/login"
        className="
          px-[20px]
          py-[10px]
          rounded-[25px]
          border
          border-[#444]
          text-white
          no-underline
          text-[14px]
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
          hover:border-white
        "
      >
        Login / Sign Up
      </Link>
    </nav>
  );
}

export default Navbar;