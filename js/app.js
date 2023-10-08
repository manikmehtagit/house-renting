const heading = React.createElement(
    'h1',
    {id: head},
    'this is heading'
);

ReactDom.render(
    heading,
    document.getElementById("react-container")
);