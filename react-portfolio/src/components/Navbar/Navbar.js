import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" || window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home
                         </Link>

                    </li>
                    <li className="nav-item">
                        <Link
                            to="/about_us"
                            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                            About Dan
                         </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/products"
                            className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                            Projects
                         </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact_us"
                            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                         </Link>
                    </li>
                </ul>

         

            </div>
        </nav>
    );
}

export default Navbar;
