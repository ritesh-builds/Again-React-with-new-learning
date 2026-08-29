import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Error.css";

function Error() {
  const navigate = useNavigate()
  return (
    <section className="error-page">
      <div className="error-content">

        <span className="error-code">404</span>

        <h1>
          Looks like
          <br />
          you're <strong>lost.</strong>
        </h1>

        <p>
          The page you're looking for doesn't exist
          or may have been moved somewhere else.
        </p>

        <Link to="/" className="error-btn">
          ← Back to Home
        </Link>

        <button 
        className="back-btn"
        onClick={() => {
          navigate(-1)
        }}
        >Back</button>

      </div>

      <div className="error-shoe">
        👟
      </div>
    </section>
  );
}

export default Error;