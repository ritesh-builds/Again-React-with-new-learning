import React from "react";

function About() {
    return (
        <div className="about-container">
            <div className="about-card">
                <h1>About FoodHub 🍔</h1>

                <p className="about-intro">
                    Welcome to FoodHub, a simple food ordering application
                    built using React.
                </p>

                <div className="about-section">
                    <h2>🚀 React Router DOM</h2>
                    <p>
                        This project demonstrates the concept of routing in
                        React using React Router DOM. It allows us to navigate
                        between different pages without reloading the entire
                        website.
                    </p>
                </div>

                <div className="about-section">
                    <h2>🛠️ Technologies Used</h2>

                    <div className="tech-list">
                        <span>React</span>
                        <span>React Router DOM</span>
                        <span>JavaScript</span>
                        <span>Tailwind CSS</span>
                        <span>Swiggy API</span>
                    </div>
                </div>

                <div className="about-section">
                    <h2>🎯 Purpose</h2>
                    <p>
                        The main purpose of this project is to understand
                        React concepts such as components, props, state,
                        hooks, API calls and client-side routing.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;