import React, { useState } from "react";
import "../style/Login.css";

function Login() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <section className="auth-section">
      <div className="auth-container">

        <div className="auth-brand">
          <span>COMFORT FOOTWEAR</span>

          <h1>
            Step into
            <br />
            <strong>comfort.</strong>
          </h1>

          <p>
            Your comfort is just one step away.
            Sign in to continue your journey with us.
          </p>
        </div>

        <div className="auth-box">

          <div className="auth-tabs">
            <button
              className={!isSignup ? "active" : ""}
              onClick={() => setIsSignup(false)}
            >
              Login
            </button>

            <button
              className={isSignup ? "active" : ""}
              onClick={() => setIsSignup(true)}
            >
              Sign Up
            </button>
          </div>

          <div className="auth-heading">
            <h2>
              {isSignup ? "Create account" : "Welcome back"}
            </h2>

            <p>
              {isSignup
                ? "Create your account to get started."
                : "Enter your details to continue."}
            </p>
          </div>

          {isSignup && (
            <div className="auth-input">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div className="auth-input">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="auth-input">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
            />
          </div>

          {isSignup && (
            <div className="auth-input">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="••••••••"
              />
            </div>
          )}

          {!isSignup && (
            <div className="forgot">
              <button>Forgot password?</button>
            </div>
          )}

          <button className="auth-submit">
            {isSignup ? "Create Account →" : "Login →"}
          </button>

          <div className="auth-switch">
            <span>
              {isSignup
                ? "Already have an account?"
                : "Don't have an account?"}
            </span>

            <button
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Login;