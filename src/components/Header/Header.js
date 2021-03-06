import React from "react";
import "./Header.css"

const Header = (props) => (
    <header className="jumbotron jumbotron-fluid">
        <h1 className="display-3 text-center">{props.title}</h1>
        <p className="lead text-center">{props.description}</p>
        <p className="lead text-center">{props.rules}</p>
    </header>
);

export default Header;