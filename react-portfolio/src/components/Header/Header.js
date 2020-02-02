import React from "react";
import "./Header.css";


function Header({children}) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Daniel Gallagher</h1>
                <p className="lead">Portfolio</p>
            </div>
            {children}
        </div>
    )
}

export default Header;