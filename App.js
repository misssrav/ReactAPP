const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"inside parent1child1-1"),React.createElement("h1",{},"inside parent1child1-2")]
))


const ele = React.createElement("h1",{id: "heading"},"Hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);