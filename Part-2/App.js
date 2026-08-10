import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => (
  <div id="container">
    <h1>Radhika is actually a cute girl.</h1>
  </div>
);

const elem = <span>React Element</span>;

const title = (
  <div>
    <h1 className="head">
        Radhika is my girlfriend.
        {elem}
    </h1>
        <HeadingComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);