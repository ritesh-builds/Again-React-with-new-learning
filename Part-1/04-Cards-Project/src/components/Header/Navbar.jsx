import React from "react";
import { Search, CircleUserRound } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>JobFinder</h2>

      <div className="nav-center">
        <a href="#">Home</a>
        <a href="#">Jobs</a>
        <a href="#">Companies</a>
        <a href="#">About</a>
      </div>

      <div className="nav-right">
        <button>
          <Search size={18} />
        </button>
        <button><CircleUserRound size={18} /></button>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;