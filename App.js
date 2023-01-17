const heading = React.createElement(
    "h2",
    { id: "heading", key: 01 },
    "My React learning With Akshey has begun"
)

/*
React.createElement has 3 arguments: React.createElement("type", {props}, "children")
    1. type (name of html tags)
    2. props (it's an object takes or holds html attributes like: id, class, style etc.)
    3. children (react elements (-is an object) or html tag's innerTexts or values)
*/
// All the react element is Object

const paragraph = React.createElement(
    "p",
    {
        id: "para",
        key: 02
    },
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam quidem, quibusdam dolor provident repudiandae totam corporis, iure nostrum sunt et doloribus dolore adipisci laudantium sapiente vitae voluptate rem voluptas?"
)

const topics = React.createElement(
    "div",
    {
        id: "topics-container",
        key: 03
    },
    [heading, paragraph]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(topics)
// The function of render() is to modify the DOM