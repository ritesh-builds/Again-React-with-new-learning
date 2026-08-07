const heading = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Hello this the I feel.."),
    React.createElement("h1", {}, "Fuck you")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);

//# sourceMappingURL=Part-2.7c0ccee6.js.map
