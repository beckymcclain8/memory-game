import React from "react";
import "./navbar.css";

const Navbar = props => (
  <div>
    <nav className="nav">
      <ul>
        <li className="gameName">
          <a href="#">Clicky Game</a>
        </li>
        <li className="begin">Click a picture to begin!</li>
        <li>"Score: "" "0" " | Top Core: " "0"</li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
