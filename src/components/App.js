import React from 'react';

class App extends React.Component {
    render() {
    return React.DOM.h1({
        id: "my-heading",
        className: "pretty",
        htmlFor: "me",
        style: {
            background: "black",
            color: "white",
            fontFamily: "Verdana",
        }
    }, React.DOM.em(null, "Hello"), "hihi")
    }
};

export default App;
