import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <div>
    <nav className="navbar navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Reset <span className="sr-only"></span></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);


export default Navbar;
