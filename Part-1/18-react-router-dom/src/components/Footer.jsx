import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-white px-[8%] pt-[80px] pb-[30px]">

      {/* TOP */}
      <div
        className="
          flex
          justify-between
          gap-[80px]
          max-[800px]:flex-col
          max-[800px]:gap-[50px]
        "
      >

        {/* BRAND */}
        <div>
          <h2
            className="
              text-[24px]
              font-medium
              tracking-[-1px]
              mb-[15px]
            "
          >
            Comfort Footwear.
          </h2>

          <p
            className="
              text-[#777]
              text-[14px]
              leading-[1.8]
              m-0
            "
          >
            Designed for comfort.
            <br />
            Made for every step.
          </p>
        </div>

        {/* LINKS */}
        <div
          className="
            grid
            grid-cols-3
            gap-[80px]
            max-[650px]:grid-cols-2
            max-[650px]:gap-[40px]
          "
        >

          {/* EXPLORE */}
          <div className="flex flex-col gap-[12px]">
            <span
              className="
                text-[#555]
                text-[11px]
                uppercase
                tracking-[2px]
                mb-[5px]
              "
            >
              Explore
            </span>

            <Link
              to="/"
              className="
                text-[#888]
                no-underline
                text-[13px]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Home
            </Link>

            <Link
              to="/products"
              className="
                text-[#888]
                no-underline
                text-[13px]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Products
            </Link>

            <Link
              to="/about"
              className="
                text-[#888]
                no-underline
                text-[13px]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              About
            </Link>

            <Link
              to="/contact"
              className="
                text-[#888]
                no-underline
                text-[13px]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Contact
            </Link>
          </div>

          {/* FOLLOW */}
          <div className="flex flex-col gap-[12px]">
            <span
              className="
                text-[#555]
                text-[11px]
                uppercase
                tracking-[2px]
                mb-[5px]
              "
            >
              Follow
            </span>

            <a
              href="#"
              className="
                text-[#888]
                no-underline
                text-[13px]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Instagram
            </a>

            <a
              href="#"
              className="
                text-[#888]
                no-underline
                text-[13px]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Twitter
            </a>

            <a
              href="#"
              className="
                text-[#888]
                no-underline
                text-[13px]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              Facebook
            </a>
          </div>

          {/* CONTACT */}
          <div
            className="
              flex
              flex-col
              gap-[12px]
              max-[650px]:col-span-2
            "
          >
            <span
              className="
                text-[#555]
                text-[11px]
                uppercase
                tracking-[2px]
                mb-[5px]
              "
            >
              Contact
            </span>

            <a
              href="mailto:hello@comfortfootwear.com"
              className="
                text-[#888]
                no-underline
                text-[13px]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              hello@comfortfootwear.com
            </a>

            <a
              href="tel:+919876543210"
              className="
                text-[#888]
                no-underline
                text-[13px]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              +91 98765 43210
            </a>
          </div>

        </div>
      </div>

      {/* LINE */}
      <div className="h-px bg-[#222] my-[50px]" />

      {/* BOTTOM */}
      <div
        className="
          flex
          justify-between
          items-center
          text-[#555]
          text-[11px]
          max-[600px]:flex-col
          max-[600px]:items-start
          max-[600px]:gap-[10px]
        "
      >
        <p className="m-0">
          © 2026 Comfort Footwear. All rights reserved.
        </p>

        <p className="m-0">
          Made with comfort ♥
        </p>
      </div>

    </footer>
  );
};

export default Footer;
