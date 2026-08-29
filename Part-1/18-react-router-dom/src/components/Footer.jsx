import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>Comfort Footwear.</h2>

          <p>
            Designed for comfort.
            <br />
            Made for every step.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>Explore</span>

            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <span>Follow</span>

            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
          </div>

          <div>
            <span>Contact</span>

            <a href="mailto:hello@comfortfootwear.com">
              hello@comfortfootwear.com
            </a>

            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </div>
        </div>

      </div>

      <div className="footer-line"></div>

      <div className="footer-bottom">
        <p>© 2026 Comfort Footwear. All rights reserved.</p>

        <p>Made with comfort ♥</p>
      </div>

    </footer>
  );
};

export default Footer;
