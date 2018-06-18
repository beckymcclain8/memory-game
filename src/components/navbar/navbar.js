import React from "react";
import "./navbar.css";


const Navbar = props => (
  <div>
    <nav className="nav">
      <ul className="list">
        <li className="game">
          <a href="localhost:3000">Clicky Game</a>
        </li>
        <li className="game">Click a picture to begin!</li>
        <li className="game">Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
