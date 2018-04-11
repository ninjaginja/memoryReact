import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" id="reset" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Reset <span className="sr-only">(current)</span></a>
        </li>
      </ul>
      
    </div>
  </nav>
);

export default Navbar;
