import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    const navigate = useNavigate();

    console.log(err);

    return (
        <div className="error-container">
            <div className="error-card">

                <div className="error-emoji">
                    🍔
                </div>

                <div className="error-code">
                    404
                </div>

                <h1>
                    Oops! Page Not Found 😕
                </h1>

                <p>
                    Looks like this page went out for delivery
                    and never reached its destination. 🍕
                </p>

                {err?.statusText && (
                    <span className="error-details">
                        {err.statusText}
                    </span>
                )}

                <div className="error-buttons">

                    <button
                        onClick={() => navigate("/")}
                        className="home-button"
                    >
                        🏠 Go Home
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="back-button"
                    >
                        ← Go Back
                    </button>

                </div>

            </div>
        </div>
    );
};

export default Error;