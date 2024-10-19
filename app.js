const parent=React.createElement("div",{id:"parent"},

    [React.createElement("h1",{id:"child1"},"react div first child "),
        React.createElement("div",{},[React.createElement("h3",{},"h2 first child "),
            React.createElement("h3",{},"h2 second child"),
            React.createElement("h3",{},"h2 Third child")]),
        React.createElement("h1",{},"Div  third child")
    ]
)








const heading=React.createElement("h1",{
    id:"heading",xyz:"abc"
},"Hello world from  React!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(heading)