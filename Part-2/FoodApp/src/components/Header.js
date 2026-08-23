import React, { useEffect, useState } from 'react'
import {LOGO_URL} from "../utils/constants"

const Header = () => {

const [loginBtn, setLoginBtn] = useState("Login")  

// if no dependency array => useEffect is called on every component render..
// if dependency array is empty = [] => useEffect is called on initial rende(just once).
// if the dependency array is [loginBtn] => called everytime loginBtn is updated.
useEffect(() => {
  console.log("UseEffect Called..");
  
}, [loginBtn])

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          {/* <li>🏠 Home</li>
          <li>ℹ️ About Us</li>
          <li>📞 Contact Us</li>
          <li>🛒 Cart</li> */}

          <li> Home</li>
          <li> About Us</li>
          <li> Contact Us</li>
          <li> Cart</li>

          <button 
          className='login-btn' 
          onClick={() => {
            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
          }}>{loginBtn}</button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
