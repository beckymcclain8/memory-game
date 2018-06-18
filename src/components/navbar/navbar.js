import React from "react";
import "./navbar.css";

const Navbar = props => (

        <nav className="nav">
          <ul className="list">
            <li className="game">
              <a href="localhost:3000">Avenger Clicky Game</a>
            </li>
            <li className="game">Click an Avenger to begin!</li>
            <li className="game">
              Score: {props.score} | Top Score: {props.topScore}
            </li>
          </ul>
        </nav>

);

export default Navbar;
