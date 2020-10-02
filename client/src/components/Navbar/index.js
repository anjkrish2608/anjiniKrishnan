import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
      <div className="container">
        <a className="navbar-brand" href="index.html" id="logo">Anjini Krishnan</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <Link className="navbar-brand" to="/">About</Link>
            <Link className="navbar-brand" to="/portfolio">Portfolio</Link>
            <Link className="navbar-brand" to="/contact">Contact</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
