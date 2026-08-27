import React from "react";
import "../style/App.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-content">
          <span className="about-tag">ABOUT US</span>

          <h1>
            Comfort that moves
            <span> with you.</span>
          </h1>

          <p className="about-description">
            We believe great footwear should feel as good as it looks.
            Our shoes are designed with a focus on everyday comfort,
            timeless style, and quality you can rely on.
          </p>

          <p className="about-description">
            From your morning walk to your everyday adventures,
            Comfort Footwear is made to keep you moving effortlessly.
          </p>

          <button className="about-btn">
            Discover Our Story →
          </button>
        </div>

        <div className="about-highlight">
          <div className="highlight-card">
            <h2>01</h2>
            <h3>Designed for Comfort</h3>
            <p>
              Thoughtful designs made to keep your feet comfortable all day.
            </p>
          </div>

          <div className="highlight-card">
            <h2>02</h2>
            <h3>Made for Everyday</h3>
            <p>
              Versatile footwear that fits naturally into your daily life.
            </p>
          </div>

          <div className="highlight-card">
            <h2>03</h2>
            <h3>Style Meets Quality</h3>
            <p>
              Modern aesthetics combined with dependable craftsmanship.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
