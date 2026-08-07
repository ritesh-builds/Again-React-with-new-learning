import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement("h1", { key: 1 }, "Hello this the I feel.."),
            React.createElement("h1", { key: 2 }, "Second Heading")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);

root.render(heading);