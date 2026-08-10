import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/RRO0wYmlFI_Ox9FscLpO4J2GVLM2e90p1zxn6PlCesI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/NjUxLzQzOC9zbWFs/bC9jb2xvcmZ1bC1m/YXN0LWZvb2QtY2Fy/dC13aXRoLWJ1cmdl/ci1mcmllcy1hbmQt/ZHJpbmstaXNvbGF0/ZWQtb24tdHJhbnNw/YXJlbnQtYmFja2dy/b3VuZC1mcmVlLXBu/Zy5wbmc"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>🛒Cart</li>
        </ul>
      </div>
    </div>
  );
};

const FoodCard = () => {
  return (
    
      <div className="food-card">
      <img
        className="food-image"
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
        alt="Pizza"
      />

      <div className="food-info">
        <h2>Meghna Pizza</h2>

        <p className="restaurant-name">
          La Pino's Pizza
        </p>

        <div className="food-details">
          <span className="price">₹299</span>
          <span className="delivery-time">30 min</span>
        </div>
      </div>
    </div>
    
  );
};

const Body = () => {
  return (
    <div className="body">
      
      <div className="res-container">
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);