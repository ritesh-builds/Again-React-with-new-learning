import React from "react";
import "../style/Home.css";

function Home() {
  return (
    <main className="home">

      <div className="home-content">
        <span className="home-tag">COMFORT FOOTWEAR</span>

        <h1>
          Walk in
          <br />
          <span>comfort.</span>
        </h1>

        <p>
          Footwear designed for the way you move.
          Simple, comfortable, and made for every day.
        </p>

        <div className="home-buttons">
          <button className="shop-btn">
            Shop Collection →
          </button>

          <button className="explore-btn">
            Explore
          </button>
        </div>
      </div>

      <div className="home-shoe">
        <div className="shoe-circle"></div>

        <div className="shoe-text">
          <span>01</span>
          <p>EVERY STEP<br />MATTERS</p>
        </div>
      </div>

      <div className="home-bottom">
        <span>EST. 2026</span>
        <span>EVERYDAY / EVERYWHERE</span>
        <span>SCROLL ↓</span>
      </div>

    </main>
  );
}

export default Home;
